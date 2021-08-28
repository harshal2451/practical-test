import { CircularProgress, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListContainer from "./Components/ListContainer/ListContainer";
import Search from "./Components/Search/Search";
import * as actions from "./redux/albumActions";
function Home() {
  const dispatch = useDispatch();
  const { list, loading, listItems } = useSelector((state) => ({
    list: state.list,
    loading: state.loading,
    listItems: state.listItems,
  }));
  const [holdList, setHoldList] = useState([]);
  const [duplicate, setDuplicate] = useState([]);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
  }));

  const [value, setValue] = useState("");
  useEffect(() => {
    dispatch(actions.fetchList());
    dispatch(actions.fetchListItem());
  }, [dispatch]);

  useEffect(() => {
    let data = list.slice(0, 5);
    data.forEach((item) => {
      let filteredData = listItems?.filter(
        (listItem) => listItem.albumId === item.userId
      );
      item.child = filteredData.splice(0, 10);
    });
    setHoldList(data);
    setDuplicate(data);
  }, [list, listItems]);

  const onChange = (e) => {
    if (e.target.value !== "") {
      let searchList = holdList.filter((item) =>
        item.title.includes(e.target.value.toLowerCase())
      );

      // setHoldList(searchList);

      if (searchList.length === 0) {
        let duplicateData = [...duplicate];
        let emptyData = [];
        duplicateData.forEach((item) => {
          let childData1 = item?.child.filter((childData) =>
            childData.title.includes(e.target.value.toLowerCase())
          );
          if (childData1.length !== 0) {
            emptyData.push(item);
          }
          item.child = childData1;
        });

        setHoldList(emptyData);

        if (emptyData.length === 0) {
          let emptyData1 = [];
          duplicateData.forEach((item) => {
            let childData1 = item?.child.filter((childData) =>
              childData.title.includes(e.target.value.toLowerCase())
            );
            if (childData1.length !== 0) {
              emptyData1.push(item);
            }
            item.child = childData1;
          });
          setHoldList(emptyData1);
        }
      } else {
        setHoldList(searchList);
      }
    } else {
      let data = list.slice(0, 5);
      data.forEach((item) => {
        let filteredData = listItems?.filter(
          (listItem) => listItem.albumId === item.userId
        );
        item.child = filteredData.splice(0, 10);
      });
      setHoldList(data);
      setDuplicate(data);
    }
    setValue(e.target.value);
  };

  const classes = useStyles();
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
      {loading && (
        <div className={classes.root}>
          <CircularProgress color="secondary" />
        </div>
      )}
      <div style={{ width: "100%" }}>
        {holdList?.map((item) => (
          <ListContainer key={Math.random() * 1000} item={item} />
        ))}
        {holdList?.length === 0 && (
          <div style={{ padding: "10px 10px", textAlign: "center" }}>
            No Records Found
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
