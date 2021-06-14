import React, { useState } from "react";

import Card from "../UI/Card/Card";
import Button from '../UI/Button/Button'
import data from "../Data/Data.json";
import classes from '../Home/Home.module.css'

const Product = () => {
  const [titleState, setTitleState] = useState("w");
  
  const addProductHandler = (props) => {
    setTitleState(props.title)
    console.log(titleState)
  };
 
  return (
    <>
      {data.product.map((item) => (
        <Card key={item.id}className={classes.home}>
           {`${item.title} - $${item.price}`}
           
          <Button type="button" onClick={addProductHandler}>Agregar</Button>
          
        </Card>
       
      ))}
    </>
  );
};

export default Product;
