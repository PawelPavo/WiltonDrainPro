import * as React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const Contact: React.FC<IContactProps> = (props) => {

  const [subject, setSubject] = React.useState<string>('')
  const [body, setBody] = React.useState<string>('')

  const onSubmit = async () => {
    try {
      window.open(`mailto:WiltonDrianPro@gmail.com?subject=${subject}&body=${body}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <NavBar />
      <GoogleFontLoader
        fonts={[
          {
            font: 'Homemade Apple',
            weights: [400, '400i'],
          },
          {
            font: 'Beth Ellen',
            weights: [400, '400i'],
          },
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />
      <main className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="display-4 mt-5 mb-3">Contact</div>
        </div>
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-md-7 order-md-12 bg-white"
            style={{ minHeight: "400px" }}
          >
            <form className="form-group"
              onSubmit={onSubmit}>
              <input
                type="text"
                className="input-group my-5 pt-3 w-75 mx-auto"
                placeholder="Email Title"
                value={subject}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
              />
              <textarea
                className="input-group my-3 w-75 mx-auto"
                id="subject"
                name="subject"
                placeholder="Your Message"
                value={body}
                onChange={(e: React.ChangeEvent<any>) => setBody(e.target.value)}
                style={{ height: "170px" }}>
              </textarea>
              <div className="row justify-content-center">
                <button className="btn border my-2 shoadow w-50 text-muted">Email Me!</button>
              </div>
            </form>
          </div>
          <ColummBackground
            style={{ minHeight: "400px" }}
            className="col-md-4 order-md-1= background">
            <div className="row d-block mt-5">
            <div className="text-center text-white font-weight-bold">Our location:</div>
              <div className="text-center text-white font-weight-lighter">2132 NE 11th Ave,</div>
              <div className="text-center text-white font-weight-lighter">Wilton Manors</div>
              <div className="text-center text-white font-weight-lighter">FL 33305</div>
            </div>
            <div className="row d-block mt-5">
              <div className="text-center text-white font-weight-bold">Phone:</div>
              <div className="text-center text-white font-weight-lighter">(561) 303 - 9111</div>
            </div>
            <div className="row d-block mt-5">
              <div className="text-center text-white font-weight-bold">Email::</div>
              <div className="text-center text-white font-weight-lighter">WiltonDrainPro@gmail.com</div>
            </div>
          </ColummBackground>
        </div>
      </main>
    </>
  )
}


const ColummBackground = styled.div`

background: linear-gradient(-45deg, #289740, #881f7d, #f18417, #dd2614, #2a9642);
background-size: 200% 100%;
animation: gradient 15s ease infinite;
height: 100%;

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }

`
export interface IContactProps { }

export default Contact;