import React, { useMemo, useState, useCallback } from "react";
import classes from "./Demolist.module.css";
import Button from "./Button";
const DemoList = (props) => {
  const { items } = props;
  const [lists, updatedLists] = useState(items);
  const [order, setOrder] = useState("Set in Descending Order");
  const changeOrder = useCallback(() => {
    if (order === "Set in Ascending Order") {
      updatedLists(items.sort((a, b) => a - b));
      setOrder("Set in Descending Order");
    } else {
      setOrder("Set in Ascending Order");
      updatedLists(items.sort((a, b) => b - a));
    }
  }, [order, items]);
  return (
    <React.Fragment>
      <div className={classes.list}>
        <h2>{props.title}</h2>
        <ul>
          {lists.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <Button onClick={changeOrder}>{order}</Button>
    </React.Fragment>
  );
};
export default React.memo(DemoList);
