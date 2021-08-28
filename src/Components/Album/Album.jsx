import { Card, CardContent, CardMedia, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "0px 50px",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: 450,
  },
  url: {
    textAlign: "left",
    color: "#9292A0",
    margin: "0px",
    marginTop: "5px",
  },
  cover: {
    width: 50,
    height: 50,
  },
  title: {
    margin: "0px",
  },
  price: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "column",
  },
  amount: {
    margin: "0px",
    marginTop: "10px",
    fontSize: "14px",
    color: "#88C488",
  },
  time: {
    margin: "0px",
    marginTop: "10px",
    color: "#B6B6BF",
    fontSize: "14px",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  fix: {
    width: 100,
  },
}));

function Album({ item }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.imageContainer}>
        <CardMedia className={classes.cover} image={item.url} />
      </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <p className={classes.title}>{item.title}</p>
          <p className={classes.url}>{item.thumbnailUrl}</p>
        </CardContent>

        <div className={classes.price}>
          <div className={classes.fix}>
            <p className={classes.amount}>$ 209</p>
            <p className={classes.time}>10:00 AM</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Album;
