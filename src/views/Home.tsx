import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

function Home() {
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Amatic SC',
            weights: [400, '400i'],
          },
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />
      <div className="container">
        <div className="row justify-content-center my-5">
          <img className="my-image" src="/Plumbing_Logo-No-BG.png" alt="Logo" style={{height: "auto", width:"60vw"}}/>
        </div>
      </div>
    </>
  );
}

export default Home;
