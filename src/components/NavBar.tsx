import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

const NavigationBar: React.FC<NavigationBarProps> = (props) => {
    return (
        <>
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Martel',
                        weights: [400, '400i'],
                    },
                ]}
            />
            <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-light shadow bg-white">
                <a className="navbar-brand" href="/">
                    <img className="ml-5" src="/Plumbing Logo.gif" alt="Logo" style={{ height: "65px", width: "auto" }} />
                </a>
                <button className="navbar-toggler mr-5" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <span className="navbar-text" style={{ fontSize: "1.4rem", fontFamily:"Martel" }}>
                        <a href="Tel:5613039111" className="text-success text-decoration-none mx-5">Call Us: (561) 303 - 9111</a>
                    </span>
                    <ul className="navbar-nav font-weight-light mx-auto" style={{ fontSize: "1.2rem" }}>
                        <li className="nav-item">
                            <a className="nav-link nav-text mx-5" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-text mx-5" href="/services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-text mx-5" href="contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export interface NavigationBarProps { }
export default NavigationBar;
