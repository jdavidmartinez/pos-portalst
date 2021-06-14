import {useState} from 'react';
import initialState from '../initialState';

function useInitialState () {
    const [state, setState] = useState(initialState);

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
        console.log(...state.cart)
    }

    return {
        addToCart,
        state
    }
}

export default useInitialState;
