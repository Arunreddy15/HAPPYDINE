import AppNavigation from "./routes/AppNavigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  
  return (
    <>
    <AppNavigation/>
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
        theme="colored"   // "light" | "dark" | "colored"
      />
    </>
  )
}

export default App
