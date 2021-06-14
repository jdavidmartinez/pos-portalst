import React from 'react';
import AppContext from '../context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import useInitialState from '../hooks/useInitialState';
import Home from '../components/Home/Home';
import Layout from '../components/Layout/Layout';

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState} >
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>  
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
