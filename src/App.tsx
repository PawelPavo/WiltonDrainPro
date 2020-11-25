import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Contact from './views/Contact';
import Home from './views/Home';
import Services from './views/Services';

function App() {
  return (
    <>
      <BrowserRouter>
        <ColummBackground>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#a2d9ff" fillOpacity="1" d="M0,160L80,181.3C160,203,320,245,480,229.3C640,213,800,139,960,133.3C1120,128,1280,192,1360,224L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
          <div className="row justify-content-center mb-5">
            <a className="phone" href="tel:5613039111">Call us: (561) 303 - 9111</a>
          </div>
        </ColummBackground>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f3f4f5" fillOpacity="1" d="M0,64L80,53.3C160,43,320,21,480,16C640,11,800,21,960,69.3C1120,117,1280,203,1360,245.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
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

.phone {
  font-size: 2rem;
  text-decoration: none;
}

`

export default App;
