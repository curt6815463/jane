import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Normalize } from "styled-normalize";
import Login from "./Login";

import { createGlobalStyle } from "styled-components";
import Header from "./Headers";
import Intro from "./Intro";
import VideoShow from "./VideoShow";
import BeforeIntro from "./BeforeIntro";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    font-family: Roboto, Helvetica, Arial, sans-serif;
  }
`;

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/before-intro",
    element: <BeforeIntro />,
  },
  {
    path: "/intro",
    element: <Intro />,
  },
  {
    path: "/video",
    element: <VideoShow />,
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
