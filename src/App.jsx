import "./App.css";
import LandingPage from "./pages/LandingPage";
import RootLayout from "./pages/Navbar/RootLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "./pages/DarkMode/ThemeProvider";


const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/"
          element={<RootLayout />}
        >
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
