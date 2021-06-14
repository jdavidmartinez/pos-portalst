import React from "react";
import Products from "../Products/Products";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import initialState from "../../initialState";


const Home = () => {
  return (
    <React.Fragment>
      <Card className={classes.home}>
        <h1>Portal St</h1>
      </Card>
      <Products products={initialState.product} />
    </React.Fragment>
  );
};

export default Home;
