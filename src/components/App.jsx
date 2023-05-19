import { Header } from "./Header/Header";
import { Main } from "./Main";
import { nanoid } from "nanoid";

export const App = () => {


  const getViewportWidth = () => {
    return window.innerWidth;
  }
  console.log(nanoid())

  return (
    <div>
      <Header width={getViewportWidth()} />
      <Main/>
    </div>
  );
};
