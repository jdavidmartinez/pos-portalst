import React, {useContext} from 'react';
import AppContext from '../../context/AppContext';
import Product from '../Product/Product';

function Products() {
    const {state, addToCart} = useContext(AppContext);
    const {product} = state;

    const handleAddToCart = product => {
        addToCart(product)
    }
    
    return (
        <>
            {product.map((products) => (
                <Product key={products.id} product={products} handleAddToCart={ () => handleAddToCart(products)} />
            ))}
        </>
    )
}

export default Products