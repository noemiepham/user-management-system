import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateUser from "./pages/CreateUser";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import Users from "./pages/Users";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ShowUser from "./pages/ShowUser";

const theme = createTheme({
  typography: {
    fontFamily: "Open Sans",
    fontWeightMedium: 400,
  },
});

function App() {
  // return (
  //   <div className="App">
  //     <ThemeProvider theme={theme}>
  //       <BrowserRouter>
  //         <Routes>
  //           <Route path="/"
  //           element={
  //             <PermanentDrawerLeft />
  //           }

  //         />
  //           <Route path="/create" element={<CreateUser />} />
  //         </Routes>
  //       </BrowserRouter>
  //     </ThemeProvider>
  //   </div>
  // );

  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "",
          element: <Users />,
        },
        {
          path: "/createUser",
          element: <CreateUser />,
        },
        {
          path: "/showUser",
          element: <ShowUser />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRoutes} />;
}

export default App;
