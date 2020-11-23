import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

function Home() {
  return (

    <Wave>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Amatic SC',
            weights: [400, '400i'],
          },
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />
      <NavBar />
      <div className="wave-container">
        <div className="row justify-content-center">
          <div className="font-weight-light display-4 mt-5 welcome-text">Welcome to</div>
        </div>
        <div className="row justify-content-center">
          <img src="/Plumbing Logo.gif" alt="Logo" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f3f4f5" fillOpacity="1" d="M0,64L80,53.3C160,43,320,21,480,16C640,11,800,21,960,69.3C1120,117,1280,203,1360,245.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </Wave>
  );
}

const Wave = styled.div`
.welcome-text {
  font-family: 'Amatic SC', sans-serif;
}

.wave-container {
  position: relative;
  text-align: center;
  overflow: hidden;
}

img {
  @media not all and (min-width: 768px) {
    width: 75%;
    padding-bottom: 100px;
  }
}

`

export default Home;
