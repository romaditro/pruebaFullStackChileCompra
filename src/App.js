import React, {Fragment} from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Paises from './components/Paises';
import DetallePais from './components/DetallePais';


//Redux
import {Provider} from 'react-redux';
import store from './store';


function App() {
  return (
      <Router>
        <Provider store={store}>
        <Header/>
          <div className="container mt-5">
              <Switch>
                  <Route exact path="/" component={Paises}></Route>
                  <Route exact path="/paises/detallepais/:id" component={DetallePais}></Route>
              </Switch>
          </div>
        </Provider>
      </Router>
  );
}

export default App;
