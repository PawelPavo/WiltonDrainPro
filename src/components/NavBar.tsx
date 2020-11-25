import React from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <Layout>
            <nav className=" fixed-top navbar navbar-expand-lg navbar-light bg-light shadow">
                <a className="navbar-brand" href="/">
                    <img src="/Plumbing Logo.gif" alt="Logo" style={{ height: "65px", width: "auto" }} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link nav-text mx-5" href="/">Home</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link nav-text mx-5" href="/services">Services</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link nav-text mx-5" href="contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </Layout>
    );
}

const Layout = styled.div`
.nav-text {
    text-decoration: none;
    font-size: 1.5rem;
    letter-spacing: 3px;
    font-weight: lighter;
    transition: all .4s ease;
    -webkit-transition: all .4s ease; 

}

.nav-text:hover {
    font-weight: normal;

}

.heart-text {
    color: red;
    animation-name: heart;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }
  
  @keyframes heart {
    0%   {color: red;}
    50%  {color: pink; }
    100% {color: red;}
  }

  .wave-container {
    position: relative;
    text-align: center;
    


`

export default Home;
