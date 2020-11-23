import React from 'react';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Contact from './views/Contact';
import Home from './views/Home';
import Services from './views/Services';

function App() {
  return (
    <>
      <BrowserRouter>
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
    </>
  );
}

const ColummBackground = styled.div`

.wave-container {
  position: relative;
  text-align: center;
  overflow: hidden;
}

`

export default App;
