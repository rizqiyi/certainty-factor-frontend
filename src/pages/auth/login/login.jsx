import { Box, Paper, InputAdornment, IconButton } from "@material-ui/core";
import React, { useContext } from "react";
import useStyles from "./login.style";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import StyledTextField from "../../../components/textfield/textfield";
import StyledTextLink from "../../../components/typography_link/typography_link";
import StyledTypography from "../../../components/typography/typography";
import StyledButton from "../../../components/button/button";
import { FastField, Form, Formik } from "formik";
import { AuthContext } from "../../../context/auth_context";
import { useHistory } from "react-router";

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const { login } = useContext(AuthContext);

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values, { resetForm }) => {
            const redirect = () => history.push("/");
            login(values, redirect);
            resetForm();
          }}
        >
          {({ handleChange }) => (
            <Form>
              <Box className={classes.flex}>
                <Box>
                  <StyledTypography variant="h4" text="Selamat Datang" />
                  <StyledTypography
                    variant="subtitle1"
                    text="Silakan login terlebih dahulu"
                  />
                </Box>
                <Box>
                  <FastField
                    component={StyledTextField}
                    onChange={handleChange}
                    id="username"
                    name="username"
                    variant="filled"
                    label="Nama Pengguna"
                    fullWidth
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </Box>
                <Box>
                  <FastField
                    component={StyledTextField}
                    onChange={handleChange}
                    id="password"
                    name="password"
                    variant="filled"
                    label="Password"
                    fullWidth
                    type={values.showPassword ? "text" : "password"}
                    InputProps={{
                      disableUnderline: true,
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? (
                              <Visibility style={{ color: "#f06292" }} />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box>
                  <StyledButton
                    color="primary"
                    variant="contained"
                    text="LOGIN"
                    type="submit"
                  />
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
        <Box className={classes.centered}>
          <StyledTypography variant="subtitle2" text="Belum mempunyai akun?" />
        </Box>
        <Box className={classes.centered}>
          <StyledTextLink
            variant="subtitle2"
            to="/register"
            text="Daftar Sekarang"
          />
        </Box>
      </Paper>
    </div>
  );
};

export default LoginPage;
