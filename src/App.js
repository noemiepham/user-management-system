import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: "Open Sans",
    fontWeightMedium: 400,
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/create" element={<CreateUser />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
