import { createBrowserRouter } from "react-router-dom";
import { LoginPage, loginLoader, taskManagerLoader } from "src/pages";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: loginLoader,
    element: <LoginPage />,
  },
  {
    path: "/task-manager",
    loader: taskManagerLoader,
    async lazy() {
      let { TaskManagerPage } = await import("src/pages");
      return { Component: TaskManagerPage };
    },
  },
  {
    path: "/*",
    element: <App />,
  },
]);
