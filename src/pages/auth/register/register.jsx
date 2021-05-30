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

const RegisterPage = () => {
  const classes = useStyles();
  const isFirstRender = useRef(true);

  const { register, message, reset, is_error_register } =
    useContext(AuthContext);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      reset();
    }
  }, [isFirstRender, reset]);

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
        <Box marginBottom={!!message ? 3 : 0}>
          {is_error_register ? (
            <StyledAlert message={message} severity="error" reset={reset} />
          ) : (
            <StyledAlert message={message} severity="success" reset={reset} />
          )}
        </Box>
        <Formik
          initialValues={{
            fullname: "",
            username: "",
            password: "",
            password_verify: "",
          }}
          onSubmit={(values, { resetForm }) => {
            register(values);
            resetForm();
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
                  <StyledButton
                    color="primary"
                    variant="contained"
                    text="DAFTAR"
                    type="submit"
                  />
                </Box>
              </Box>
              <Box className={classes.centered}>
                <StyledTypography
                  variant="subtitle2"
                  text="Sudah mempunyai akun?"
                />
              </Box>
              <Box className={classes.centered}>
                <StyledTextLink
                  variant="subtitle2"
                  to="/login"
                  text="Login Sekarang"
                />
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </div>
  );
};

export default RegisterPage;
