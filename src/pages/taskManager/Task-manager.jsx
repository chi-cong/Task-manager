import "src/pages/taskManager/Task-manager.css";
import { routeAuthService, getBookList } from "src/services";
import { useLoaderData } from "react-router-dom";

export const taskManagerLoader = async () => {
  routeAuthService({ redirectPath: "/" });
  const bookList = await getBookList();
  return bookList;
};

export const TaskManagerPage = () => {
  const bookList = useLoaderData();
  return bookList.map((book) => {
    return <p>{book.title}</p>;
  });
};
