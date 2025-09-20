import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import AppNavigation from "./routes/AppNavigation";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '"Poppins", "Roboto", sans-serif',
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppNavigation />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored" // "light" | "dark" | "colored"
        />
      </ThemeProvider>
    </>
  );
}

export default App;
