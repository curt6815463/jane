import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Normalize } from "styled-normalize";
import Login from "./Login";

import { createGlobalStyle } from "styled-components";

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
    path: "/",
    element: <div>Hello world!</div>,
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
