import React from "react";
import Card from "../UI/Card/Card";
import Button from '../UI/Button/Button'
import classes from '../Home/Home.module.css'

const Product = ({ product, handleAddToCart }) => {
  return (
    <>
        <Card key={product.id} className={classes.home}>
           {`${product.title} - $${product.price}`}
          <Button type="button" onClick={handleAddToCart}>Agregar</Button>
        </Card>
    </>
  );
};

export default Product;
