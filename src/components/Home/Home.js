import React from "react";

import Product from "../Product/Product";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const addProductHandler = (props) =>  {
  console.log(props)
}

const Home = (props) => {
  return (
    <React.Fragment>
      <Card className={classes.home}>
        <h1>Portal St</h1>
      </Card>
      <Product addProduct={addProductHandler} />
    </React.Fragment>
  );
};

export default Home;
