import "./App.css";
import { useState } from "react";
import { addToList } from "./JS/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import List from "./component/List";
import ADD from "./component/ADD";
import FILTER from "./component/FILTER";

function App(props) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const selectTodos = (state) => state.toDoList;
  const todos = useSelector(selectTodos);

  const add = () => {
    const newadd = {
      id: Math.random(),
      text: value,
      Done: false,
    };
    dispatch(addToList(newadd));
    setValue("");
  };

  return (
    <div>
      <div className="Header">
        <img
          src="./film.gif"
          alt="logo study"
          width="200px"
          height="100px"
        ></img>
        <h1 className="titre">To Do Films </h1>
        <FILTER todos={todos} />
      </div>
      <ADD add={add} value={value} setValue={setValue} />
      <List todos={todos} />
    </div>
  );
}

export default App;
