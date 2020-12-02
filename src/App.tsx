import React from 'react';
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavBar';
import Contact from './views/Contact';
import Home from './views/Home';
import Services from './views/Services';

function App() {
  return (
    <>
        <HashRouter>
      <div className="bg-light">
          <NavigationBar />

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
      </div>
        </HashRouter>
    </>
  );
}

export default App;
