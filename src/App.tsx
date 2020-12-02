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
            <Route exact path={process.env.PUBLIC_URL + '/'}>
              <Home />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/services'}>
              <Services />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/contact'}>
              <Contact />
            </Route>
          </Switch>
      </div>
        </HashRouter>
    </>
  );
}

export default App;
