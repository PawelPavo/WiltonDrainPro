import * as React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import styled from 'styled-components';
import NavBar from '../components/NavBar';


// value={subject}
// onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}


const Contact: React.FC<IContactProps> = (props) => {

  const [subject, setSubject] = React.useState<string>('')
  const [body, setBody] = React.useState<string>('')
  const [name, setName] = React.useState<string>('')
  const [phone, setPhone] = React.useState<any>('')

  const onSubmit = async () => {
    try {
      window.open(`mailto:WiltonDrianPro@gmail.com?subject=${subject}&body=${body}, Name: ${name}, Phone: ${phone} `);
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
      <Wave>
        <div className="container">
          <div className="row mt-5 justify-content-center display-4">Contact</div>
          <div className="row mt-5 justify-content-center">
            <div className="col-md-8">
              <form>
                <div className="form-group">
                  <small className="form-text text-muted">Subject</small>
                  <input
                    value={subject}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
                    className="form-control" />
                </div>
                <div className="form-group">
                  <small className="form-text text-muted">Name</small>
                  <input
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    className="form-control" />
                </div>
                <div className="form-group">
                  <small className="form-text text-muted">Phone</small>
                  <input
                    value={phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                    className="form-control" />
                </div>
                <div className="form-group">
                  <small className="form-text text-muted">Message</small>
                  <textarea
                    rows={5}
                    value={body}
                    onChange={(e: React.ChangeEvent<any>) => setBody(e.target.value)}
                    className="form-control" />
                </div>
                <div className="row justify-content-center">
                  <button
                    onClick={onSubmit}
                    type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f3f4f5" fillOpacity="1" d="M0,64L80,90.7C160,117,320,171,480,176C640,181,800,139,960,106.7C1120,75,1280,53,1360,42.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </Wave>
    </>
  )
}


const Wave = styled.div`

img {
  @media not all and (min-width: 768px) {
              width: 75%;
    padding-bottom: 100px;
  }
}

`
export interface IContactProps { }

export default Contact;