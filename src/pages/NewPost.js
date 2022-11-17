import { useOutletContext, useNavigate } from "react-router-dom";
import {useState} from "react";


const About = () => {
  const [user, setUser] = useOutletContext()
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  let navigate = useNavigate()


  const makePost = async () => {
    if (!user) {
      alert('You must be logged in to make a post')
      return
    } else if (!title || !subject || !body || !imageUrl) {
      alert('Please fill in all fields')
      return
    }
    let response
    try {
      response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          subject,
          body,
          imageUrl,
          user: user.username
        })
      })
    } catch (e) {
      console.log('error',JSON.stringify(e))
      return
    }
    if (response.status === 200) {
      let fetchedPost = await response.json()
      console.log(fetchedPost)
      navigate('/mongoCP/build/')
    } else {
      console.log('error making post ', response)
    }
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">New Post</h5>
                {/*<form>*/}
                  <div className="form-group">
                    <label htmlFor="shortTitle">Short Title</label>
                    <input type="text" className="form-control" id="shortTitle" name="title" onChange={e => setTitle(e.target.value)} placeholder="Enter title"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="longTitle">Detailed Title</label>
                    <input type="text" className="form-control" id="longTitle" name="title" onChange={e => setSubject(e.target.value)} placeholder="Enter title"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" name="description" onChange={e => setBody(e.target.value)} rows="3"></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">URL to Image (upload it on a site like imgur and post the url here):</label>
                    <input type="text" className="form-control-file" multiple="multiple" onChange={e => setImageUrl(e.target.value)} id="image" name="image"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username"
                           placeholder={user.username} disabled/>
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={makePost}>Submit</button>
                {/*</form>*/}
              </div>
            </div>
          </div>
          <div className="col-md-4 post-detail-col">
            <div className="page-header header">
              <h3>Remember the Forum Rules:</h3>
            </div>
            <div className="page-content">
              <ol className="list-group list-group-flush">
                <li className="list-group-item">
                  1. Be respectful to others.
                </li>
                <li className="list-group-item">
                  2. Do not spam.
                </li>
                <li className="list-group-item">
                  3. <strong>Do not post anything illegal.</strong>
                </li>
                <li className="list-group-item">
                  4. <strong>Do not post anything that is not keyboard related.</strong>
                </li>
                <li className="list-group-item">
                  5. <strong>No AI generated keyboards</strong>
                </li>
                <li className="list-group-item">
                  6. <strong>No keyboards that are not mechanical</strong>
                </li>
                <li className="list-group-item">
                  7. No Web Scraping (our data stays here)
                </li>
                <li className="list-group-item">
                  8. Have fun!
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default About;