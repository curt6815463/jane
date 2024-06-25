import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Normalize } from "styled-normalize";
import Login from "./Login";

import { createGlobalStyle } from "styled-components";
import Header from "./Headers";
import Intro from "./Intro";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
`;

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/intro",
    element: <Intro />,
  },
  {
    path: "/test",
    element: <div>test</div>,
  },
]);
function App() {
  return (
    <>
      <GlobalStyle />
      <Normalize />
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
