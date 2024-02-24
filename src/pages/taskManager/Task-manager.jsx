import "src/pages/taskManager/Task-manager.css";
import { routeAuthService } from "src/services";

export const taskManagerLoader = () => {
  return routeAuthService({ redirectPath: "/" });
};

export const TaskManagerPage = () => {
  return <h1>Task Manager Page</h1>;
};
