import { Box, Paper, InputAdornment, IconButton } from "@material-ui/core";
import React, { useContext, useEffect, useRef } from "react";
import useStyles from "./register.style";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import StyledTextLink from "../../../components/typography_link/typography_link";
import StyledTextField from "../../../components/textfield/textfield";
import StyledTypography from "../../../components/typography/typography";
import StyledButton from "../../../components/button/button";
import { FastField, Form, Formik } from "formik";
import { AuthContext } from "../../../context/auth_context";
import StyledAlert from "../../../components/alert/alert";
import CircularProgress from "@material-ui/core/CircularProgress";

const RegisterPage = () => {
  const classes = useStyles();
  const isFirstRender = useRef(true);

  // mengambil data dan fungsi pada auth context
  const {
    register,
    message,
    reset,
    is_error_register,
    is_success_register,
    is_loading,
  } = useContext(AuthContext);

  // reset data pada auth context setiap page pertama kali dibuka
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      reset();
    }
  }, [isFirstRender, reset]);

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  // fungsi untuk toggle input password agar visible atau tidak
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  console.log(is_loading);

  // komponen - komponen yang terdapat pada halaman registrasi
  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Box marginBottom={!!message ? 3 : 0}>
          {/* menampilkan error message atau success message ketika user menekan tombol daftar */}
          <StyledAlert
            condition={is_error_register}
            message={message}
            severity="error"
            reset={reset}
          />
          <StyledAlert
            condition={is_success_register}
            message={message}
            severity="success"
            reset={reset}
          />
        </Box>
        <Formik
          initialValues={{
            fullname: "",
            username: "",
            password: "",
            password_verify: "",
          }}
          onSubmit={(values, { resetForm }) => {
            // fungsi register untuk mendaftarkan user
            register(values);
          }}
        >
          {({ handleChange }) => (
            <Form>
              <Box className={classes.flex}>
                <Box>
                  <StyledTypography variant="h4" text="Daftar Akun" />
                  <StyledTypography
                    variant="subtitle1"
                    text="Silakan daftar akun untuk melakukan login"
                  />
                </Box>
                <Box>
                  <FastField
                    variant="filled"
                    label="Nama Lengkap"
                    fullWidth
                    id="fullname"
                    name="fullname"
                    onChange={handleChange}
                    component={StyledTextField}
                    InputProps={{ disableUnderline: true }}
                  />
                </Box>
                <Box>
                  <FastField
                    variant="filled"
                    label="Nama Pengguna"
                    fullWidth
                    id="username"
                    name="username"
                    onChange={handleChange}
                    component={StyledTextField}
                    InputProps={{ disableUnderline: true }}
                  />
                </Box>
                <Box>
                  <FastField
                    variant="filled"
                    label="Password"
                    fullWidth
                    id="password"
                    name="password"
                    onChange={handleChange}
                    component={StyledTextField}
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
                  <FastField
                    variant="filled"
                    label="Ulangi Password"
                    fullWidth
                    id="password_verify"
                    name="password_verify"
                    onChange={handleChange}
                    component={StyledTextField}
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
                  {is_loading ? (
                    <CircularProgress />
                  ) : (
                    <StyledButton
                      color="primary"
                      variant="contained"
                      text="DAFTAR"
                      type="submit"
                    />
                  )}
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
        <Box className={classes.centered}>
          <StyledTypography variant="subtitle2" text="Sudah mempunyai akun?" />
        </Box>
        <Box className={classes.centered}>
          <StyledTextLink
            variant="subtitle2"
            to="/login"
            text="Login Sekarang"
          />
        </Box>
      </Paper>
    </div>
  );
};

export default RegisterPage;
