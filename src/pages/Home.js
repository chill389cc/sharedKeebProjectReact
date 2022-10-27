import { Link } from 'react-router-dom'
import img1 from './../img/keeb1/img1.jpg';
import img2 from './../img/keeb2/20200608_162413.jpg';
import img3 from './../img/keeb3/IMG_3824.jpg';
import img4 from './../img/keeb4/IMG_3169.jpg';
import img5 from './../img/keeb5/64728000108__18187149-7D91-41B8-8C66-AED552C97699.jpg';
import img6 from './../img/keeb6/DSC_0023.jpg';
import img7 from './../img/keeb7/20200512_173717.jpg';

const Home = () => {
  return <div className="container">
    <div className="row">
      <div className="col-sm-8">
        <div className="page-header header">
          <h1>Welcome to the Klique <br/><small>A community of like-minded keyboard hobbyists. Share your board with
            us!</small></h1>

          <div className="feed-grid">
            <div className="feed-item card">
              <img className="card-img-top" src={img1} alt="John's Keyboard"/>
                <div className="card-body">
                  <h5 className="card-title">Handmade AEKII 40%</h5>
                  <p className="card-text text-muted">by @chill389cc</p>
                </div>
            </div>
            <div className="feed-item card">
              <img className="card-img-top" src={img2} alt="Roger's Keyboard"/>
                <div className="card-body">
                  <h5 className="card-title">Blue and White keyboard</h5>
                  <p className="card-text text-muted">by @Roger</p>
                </div>
            </div>
            <div className="feed-item card">
              <img className="card-img-top" src={img3} alt="Jessica's Keyboard"/>
                <div className="card-body">
                  <h5 className="card-title">Laser-cut mini keyboard!</h5>
                  <p className="card-text text-muted">by @JessicaAlba</p>
                </div>
            </div>
            <div className="feed-item card">
              <img className="card-img-top" src={img4}
                   alt="Hailey's Keyboard"/>
                <div className="card-body">
                  <h5 className="card-title">Ergo-style keyboard</h5>
                  <p className="card-text text-muted">by @Hailey</p>
                </div>
            </div>
            <div className="feed-item card">
              <img className="card-img-top" src={img5} alt="Ronald's Keyboard"/>
                <div className="card-body">
                  <h5 className="card-title">Retro keyboard!!</h5>
                  <p className="card-text text-muted">by @RonaldMcDonald</p>
                </div>
            </div>
            <div className="feed-item card">
              <img className="card-img-top" src={img6} alt="Caleb's Keyboard"/>
                <div className="card-body">
                  <h5 className="card-title">Gamer keyboard</h5>
                  <p className="card-text text-muted">by @CalebHill</p>
                </div>
            </div>
            <div className="feed-item card">
              <img className="card-img-top" src={img7} alt="Caleb's Keyboard"/>
                <div className="card-body">
                  <h5 className="card-title">Black and Gray board</h5>
                  <p className="card-text text-muted">by @SteveJobs</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="action-center">
          <Link className="btn btn-primary btn-lg btn-block" to="/NewPost">
            New Post
          </Link>
        </div>
        <br/> <br/>
        <hr/>
        <br/>
        <div className="page-header">
          <h3 className="header">About Us:</h3>
        </div>
        <div className="page-content">
          <div className="card about-us-card bg-light mb3">
            <div className="card-header">
              <h4>Who We Are</h4>
            </div>
            <div className="card-body">
              <h5 className="card-title">Keyboard Klique</h5>
              <p className="card-text">We are a group of keyboard enthusiasts who love to build and take pictures of
                keyboards. We are based in the United States, but we have members all over the world. We are always
                looking for new members to join our club. If you are interested in joining, please contact us!</p>
              <Link to="./About" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default Home;
