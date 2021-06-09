import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Home from './component/page/Home';
import Basket from './component/page/1-a-Basket';
import Principe from './component/page/1-b-Principe';
import './index.css';


function App() {
  return (
    <Container>
      <div className="App">
        <Router>
          <Route path="/" exact component={Home}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/basket-fauteuil" exact component={Basket}></Route>
          <Route path="/basket-fauteuil/principe" exact component={Principe}></Route>
        </Router>
      </div>
    </Container>
  );
}

export default App;