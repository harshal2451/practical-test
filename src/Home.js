import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListContainer from "./Components/ListContainer/ListContainer";
import Search from "./Components/Search/Search";
import * as actions from "./redux/albumActions";
function Home() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => ({
    list: state.list,
  }));
  const [holdList, setHoldList] = useState([]);

  const [value, setValue] = useState("");
  useEffect(() => {
    dispatch(actions.fetchList());
    dispatch(actions.fetchListItem());
  }, [dispatch]);

  useEffect(() => {
    let data = list.slice(0, 5);
    setHoldList(data);
  }, [list]);

  const onChange = (e) => {
    if (e.target.value !== "") {
      let searchList = holdList.filter((item) =>
        item.title.includes(e.target.value)
      );
      setHoldList(searchList);
    } else {
      let data = list.slice(0, 5);
      setHoldList(data);
    }
    setValue(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Search handleChange={onChange} value={value} />
      <div style={{ width: "100%" }}>
        {holdList?.map((item) => (
          <ListContainer key={Math.random() * 1000} item={item} />
        ))}
        {holdList?.length == 0 && (
          <div style={{ padding: "10px 10px", textAlign: "center" }}>
            No Records Found
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
