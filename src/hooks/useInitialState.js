import {useState} from 'react';
import initialState from '../initialState';

function useInitialState () {
    const [state, setState] = useState(initialState);

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = (payload, indexToRemove) => {
        setState({
            ...state,
            cart: state.cart.filter((_item, indexCurrent) => indexCurrent !== indexToRemove),
        });
    };

    return {
        addToCart,
        state,
        removeFromCart
    }
}

export default useInitialState;
