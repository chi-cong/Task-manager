import enviroment from "src/enviroment";
import axios from "axios";

export const getBookList = async () => {
  const apiRoute = "/books"
  const bookList = await axios.get('http://127.0.0.1:3000/books');
  if (bookList) {
    return bookList.data
  }
  return null;
}