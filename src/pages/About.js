import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="jumbotron">
            <h1 className="display-4">Welcome to the Keyboard Klique</h1>
            <p className="lead">As you know, a clique is "a small group of people, with shared interests or other features
              in common,
              who spend time together and do not readily allow others to join them."
              <br/>
                Here in the Keyboard Klique, we do just that. With one added bonus: Keyboards Click.</p>
            <hr className="my-4"/>
            <p>We hope you feel welcome here. Feel free to make a post, ask a question, or leave a comment. Thanks for
              visiting!</p>
            <p className="lead">
              <Link className="btn btn-primary btn-lg" to="/NewPost" role="button">Make a post</Link>
            </p>
          </div>
        </div>
        <div className="col-sm">
          <div className="page-header header">
            <h3>Forum Rules</h3>
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
                3. Do not post anything illegal.
              </li>
              <li className="list-group-item">
                4. Do not post anything that is not keyboard related.
              </li>
              <li className="list-group-item">
                5. No AI generated keyboards
              </li>
              <li className="list-group-item">
                6. No keyboards that are not mechanical
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
  )
};

export default About;