import * as React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

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
        <div className="container">
          <div className="row justify-content-center display-4 my-5">Contact</div>
          <div className="row mt-3 justify-content-center">
            <div className="col-md-8 border p-5 shadow-sm">
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
                    rows={3}
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
    </>
  )
}

export interface IContactProps { }

export default Contact;