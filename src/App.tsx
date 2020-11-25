import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavBar';
import Contact from './views/Contact';
import Home from './views/Home';
import Services from './views/Services';

function App() {
  return (
    <>
          <div className="bg-light">
      <BrowserRouter>
        <NavigationBar / >

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
          </div>
    </>
  );
}

export default App;
