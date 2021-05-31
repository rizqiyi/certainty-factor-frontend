import React, { useContext, useEffect } from "react";
import useStyles from "./home.style";
import {
  Container,
  Box,
  Paper,
  Checkbox,
  FormControlLabel,
  CircularProgress,
} from "@material-ui/core";
import StyledTypography from "../../components/typography/typography";
import { FieldArray, Form, Formik } from "formik";
import { MainContext } from "../../context/main_context";
import StyledButton from "../../components/button/button";

const HomePage = () => {
  const classes = useStyles();
  // mengambil data dan fungsi pada main context
  const { index, symptoms, create, result, reset, is_fetching, is_loading } =
    useContext(MainContext);

  // mengambil data dan state management pada setiap halaman direfresh
  useEffect(() => {
    index();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // komponen - komponen yang terdapat pada halaman home
  return (
    <Container>
      <Paper className={classes.paper}>
        <Formik
          initialValues={{
            symptoms_id: [],
            account_id: localStorage.getItem("account_id"),
          }}
          onSubmit={(values) => {
            // fungsi create untuk hit api ke server
            // dan menghitung nilai cf, rule, dll
            create(values);
          }}
        >
          {({ values, resetForm }) => (
            <Form>
              <Box p={4}>
                <Box>
                  <StyledTypography text="Hitung Nilai CF" variant="h4" />
                </Box>
                <Box mt={4}>
                  <StyledTypography
                    text="Gejala Penyakit Ayam :"
                    variant="h6"
                  />
                </Box>
                <Box mt={2} display="flex" flexDirection="column">
                  {is_fetching ? (
                    <CircularProgress />
                  ) : (
                    <FieldArray
                      name="symptoms_id"
                      id="symptoms_id"
                      render={(arrayHelpers) => (
                        <>
                          {symptoms.map((data, idx) => {
                            return (
                              <FormControlLabel
                                key={idx}
                                control={
                                  <Checkbox
                                    color="primary"
                                    name="symptoms_id"
                                    type="checkbox"
                                    value={data._id}
                                    checked={values.symptoms_id.includes(
                                      data._id
                                    )}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        arrayHelpers.push(data._id);
                                      } else {
                                        const idx = values.symptoms_id.indexOf(
                                          data._id
                                        );
                                        arrayHelpers.remove(idx);
                                      }
                                    }}
                                  />
                                }
                                label={data.symptoms_name}
                              />
                            );
                          })}
                        </>
                      )}
                    />
                  )}
                </Box>
                {is_loading ? (
                  <Box mt={4}>
                    <CircularProgress />
                  </Box>
                ) : (
                  <Box mt={4} display="flex">
                    <Box>
                      <StyledButton
                        color="primary"
                        variant="contained"
                        text="HITUNG"
                        disabled={values.symptoms_id.length === 0}
                        type="submit"
                      />
                    </Box>
                    <Box ml={4}>
                      <StyledButton
                        classes={classes.root}
                        variant="contained"
                        text="RESET"
                        onClick={() => {
                          resetForm();
                          reset();
                        }}
                      />
                    </Box>
                  </Box>
                )}
                {/* Jika hasil response dari server tidak sama dengan 0 maka tampilkan */}
                {result && result.length !== 0 ? (
                  <Box mt={4}>
                    <Box>
                      <StyledTypography text="Hasil :" variant="h6" />
                    </Box>
                    <Box mt={2}>
                      {/* Mengambil nilai penyakit tertinggi dari sisi server pada sisi client */}
                      <StyledTypography
                        text={`Penyakit dengan ranking tertinggi : ${result.highest_score.disease_id.disease_name}`}
                        variant="subtitle2"
                      />
                    </Box>
                    <Box>
                      {/* mengambil nilai cf_value untuk ditampilkan pada sisi client dari sisi server */}
                      <StyledTypography
                        text={`Nilai CF : ${result.rule.cf_value}`}
                        variant="subtitle2"
                      />
                    </Box>
                    <Box>
                      {/* mengambil kondisi rule untuk ditampilkan di sisi client */}
                      <StyledTypography
                        text={`Rule : ${result.rule.rule_condition}`}
                        variant="subtitle2"
                      />
                    </Box>
                  </Box>
                ) : null}
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default HomePage;
