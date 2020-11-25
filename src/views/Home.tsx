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
      <div className="vh-100">
        <div className="row justify-content-center">
          <img className="my-image" src="/Plumbing_Logo-No-BG.png" alt="Logo" />
        </div>
      </div>
    </Wave>
  );
}

const Wave = styled.div`


.my-image {
  @media not all and (min-width: 700px) {
    width: 75%;
  }
}

`

export default Home;
