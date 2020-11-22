import React from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <Layout>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <a className="navbar-brand" href="/">
                    <img src="/Plumbing_Logo-No-BG.png" alt="Logo" style={{height: "100px", width: "auto"}}/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link nav-text mx-3" href="/">Home</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link nav-text mx-3" href="/services">Services</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link nav-text mx-3" href="contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </Layout>
    );
}

const Layout = styled.div `
.nav-text {
    text-decoration: none;
    font-size: 1rem;
    letter-spacing: 3px;
    font-weight: light;
}

.nav-text:hover {
    font-weight: bold;

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


`

export default Home;
