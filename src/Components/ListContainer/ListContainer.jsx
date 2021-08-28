import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import Album from "../Album";
function ListContainer({ item }) {
  const { listItem, state } = useSelector(
    (state) => ({
      listItem: state.listItems,
      state: state,
    }),
    shallowEqual
  );
  const [listItems, setListItems] = useState([]);
  useEffect(() => {
    let items = listItem?.filter(
      (listItem) => listItem.albumId === item.userId
    );
    setListItems(items);
  }, [item, listItem]);
  return (
    <div>
      <h2 style={{ paddingLeft: "50px" }}>{item?.title}</h2>
      {listItems?.map((item) => (
        <Album key={Math.random() * 1000} item={item} />
      ))}
    </div>
  );
}

export default ListContainer;
