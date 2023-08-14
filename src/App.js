import react, { useCallback, useMemo, useState } from "react";
import classes from "./App.module.css";
import DemoList from "./DemoList";
import Button from "./Button";

function App(props) {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className={classes.app}>
      <DemoList title={listTitle} items={listItems}></DemoList>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
