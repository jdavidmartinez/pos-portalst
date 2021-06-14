import React, {useContext} from 'react';
import AppContext from '../../context/AppContext';

function Product() {
    const {state, addToCart} = useContext(AppContext);
    const {product} = state;

    const handleAddToCart = product => () => {
        addToCart(product)
      }
    
    return (
        <>
            {product.map((product) => (
            <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
            ))}
        </>
    )
}

export default Product