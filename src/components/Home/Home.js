import React, {useContext} from "react";
import Products from "../Products/Products";
import {Link} from 'react-router-dom';
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import initialState from "../../initialState"; 
import AppContext from '../../context/AppContext';


const Home = () => {
  const {state} = useContext(AppContext);
  const {cart} = state;
  console.log(cart)

  return (
    <>
      <React.Fragment>
        <Card className={classes.home}>
          <h1>Portal St</h1>
          <Link to="/checkout">  
            <p>Carrito</p>
          </Link>
          {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
        </Card>
        <Products products={initialState.product} />
      </React.Fragment>
          
    </>
  );
};

export default Home;
