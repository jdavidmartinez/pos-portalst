import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

function Header() {
  const {state} = useContext(AppContext);
  const {cart} = state;

  return (
    <div className="Header">
          <h1 className="Header-title">Portal</h1>
      <div className="Header-checkout">
          <i className="fas fa-shopping-basket" />
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
}

export default Header;