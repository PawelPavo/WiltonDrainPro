import React from 'react';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <>
      <NavBar />
      <div className="row justify-content-center mt-5">
        <div className="font-weight-light display-4">Home</div>
      </div>
    </>
  );
}

export default Home;
