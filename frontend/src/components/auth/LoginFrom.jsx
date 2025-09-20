import { Lock, Person, Visibility, VisibilityOff } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginInitialValues } from "../../forms/initialValues/initialValues";
import { loginValidationSchema } from "../../forms/validations/validationSchema";
import { en } from "../../i18n/content";
import { ENDPOINTS } from "../../routes/AppUrls";
import { LANDING } from "../../routes/routes";
import { loginApi } from "./../../api/authApi";

export default function LoginForm() {
  const strings = en;
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(loginApi(values)).unwrap();
        toast.success(`Login Success`);
        navigate(`${LANDING}`);
      } catch (err) {
        console.error("Login failed:", err);
        toast.error(`Login failed`);
      }
    },
  });

  return (
    <Box sx={{ flex: 1, p: { xs: 3, sm: 5 } }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {strings.labels.login}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {strings.text.loginInstructions}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2}>
          <TextField
            fullWidth
            id="username"
            name="username"
            label={strings.labels.username}
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            id="password"
            name="password"
            label={strings.labels.password}
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((p) => !p)}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Box sx={{ display: "flex", justifyContent: "flex-end", my: 2 }}>
          <Link
            to={ENDPOINTS.RESET_PASSWORD}
            variant="body2"
            sx={{ color: "#F2385A" }}
          >
            {strings.labels.forgotPassword}
          </Link>
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            py: 1.5,
            textTransform: "none",
            fontSize: "1rem",
            backgroundColor: "#F2385A",
          }}
        >
          {strings.labels.login}
        </Button>
      </form>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" color="text.secondary">
          {strings.labels.or}
        </Typography>
      </Divider>

      <Stack spacing={2}>
        <Button
          variant="outlined"
          startIcon={<GoogleIcon />}
          fullWidth
          sx={{ justifyContent: "center" }}
        >
          {strings.labels.google}
        </Button>
        <Button
          variant="outlined"
          startIcon={<FacebookIcon />}
          fullWidth
          sx={{ justifyContent: "center" }}
        >
          {strings.labels.facebook}
        </Button>
      </Stack>

      <Typography align="center" variant="body2" sx={{ mt: 4 }}>
        {strings.text.accountInstructions}{" "}
        <Link to={ENDPOINTS.REGISTER} fontWeight="bold">
          {strings.labels.signUp}
        </Link>
      </Typography>
    </Box>
  );
}
