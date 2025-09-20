import { Box, Container, Paper } from "@mui/material";
import loginBanner from "../assets/loginBanner.jpeg";
import LoginForm from "../components/auth/LoginFrom";
import LoginImage from "../components/auth/LoginImage";
import { en } from "../i18n/content";
export default function LoginPage() {
  const strings = en.text;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={6}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            overflow: "hidden",
            borderRadius: 3,
          }}
        >
          <LoginImage
            image={loginBanner}
            title={strings.loginTitle}
            subtitle={strings.subtitle}
            features={strings.features}
          />
          <LoginForm />
        </Paper>
      </Container>
    </Box>
  );
}
