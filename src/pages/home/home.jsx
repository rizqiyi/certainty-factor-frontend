import React, { useContext, useEffect } from "react";
import useStyles from "./home.style";
import {
  Container,
  Box,
  Paper,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import StyledTypography from "../../components/typography/typography";
import { FieldArray, Form, Formik } from "formik";
import { MainContext } from "../../context/main_context";
import StyledButton from "../../components/button/button";

const HomePage = () => {
  const classes = useStyles();
  const { index, symptoms, create, result, reset } = useContext(MainContext);

  useEffect(() => {
    index();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Paper className={classes.paper}>
        <Formik
          initialValues={{
            symptoms_id: [],
            account_id: localStorage.getItem("account_id"),
          }}
          onSubmit={(values) => {
            create(values);
            console.log(values);
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
                </Box>
                <Box mt={4} display="flex">
                  <Box>
                    <StyledButton
                      color="primary"
                      variant="contained"
                      text="HITUNG"
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
                {result.length !== 0 ? (
                  <Box mt={4}>
                    <Box>
                      <StyledTypography text="Hasil :" variant="h6" />
                    </Box>
                    <Box mt={2}>
                      <StyledTypography
                        text={`Penyakit dengan ranking tertinggi : ${result.highest_score.disease_id.disease_name}`}
                        variant="subtitle2"
                      />
                    </Box>
                    <Box>
                      <StyledTypography
                        text={`Nilai CF : ${result.rule.cf_value}`}
                        variant="subtitle2"
                      />
                    </Box>
                    <Box>
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
