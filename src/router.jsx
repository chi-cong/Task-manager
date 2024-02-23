import { createBrowserRouter } from "react-router-dom";
import { LoginPage, TaskManagerPage } from "src/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/task-manager",
    element: <TaskManagerPage />,
  },
]);
