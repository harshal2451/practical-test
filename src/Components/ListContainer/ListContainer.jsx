import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import Album from "../Album";
function ListContainer({ item }) {
  return (
    <div>
      <h2 style={{ paddingLeft: "20px" }}>{item?.title}</h2>
      {item?.child.map((obj) => (
        <Album key={Math.random() * 1000} item={obj} />
      ))}
    </div>
  );
}

export default ListContainer;
