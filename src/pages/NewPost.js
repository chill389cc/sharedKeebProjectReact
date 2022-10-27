const About = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">New Post</h5>
                <form action="#" method="post" encType="multipart/form-data">
                  <div className="form-group">
                    <label htmlFor="shortTitle">Short Title</label>
                    <input type="text" className="form-control" id="shortTitle" name="title" placeholder="Enter title"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="longTitle">Detailed Title</label>
                    <input type="text" className="form-control" id="longTitle" name="title" placeholder="Enter title"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" name="description" rows="3"></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">Image(s)</label>
                    <input type="file" className="form-control-file" multiple="multiple" id="image" name="image"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username"
                           placeholder="Enter username"/>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
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