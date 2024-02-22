import "./App.css";
import { LoginPage, TaskManagerPage } from "src/pages/";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/task-manager",
      element: <TaskManagerPage />,
    },
  ]);
  return routes;
}

export default App;
