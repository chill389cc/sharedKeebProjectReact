import { Link, useOutletContext } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Edit from './Popups'
import img1 from './../img/keeb1/img1.jpg';
import img2 from './../img/keeb2/20200608_162413.jpg';
import img3 from './../img/keeb3/IMG_3824.jpg';
import img4 from './../img/keeb4/IMG_3169.jpg';
import img5 from './../img/keeb5/64728000108__18187149-7D91-41B8-8C66-AED552C97699.jpg';
import img6 from './../img/keeb6/DSC_0023.jpg';
import img7 from './../img/keeb7/20200512_173717.jpg';


const Home = () => {
  const hardCodedPosts = [
    {
      id: 1,
      title: 'Handmade AEKII 40%',
      subject: 'A good keyboard',
      imageUrl: img1,
      user: 'johnstevens'
    },
    {
      id: 2,
      title: 'Blue and White keyboard',
      subject: 'A great keyboard',
      imageUrl: img2,
      user: 'Roger'
    },
    {
      id: 3,
      title: 'Laser-cut mini keyboard!',
      subject: 'A great keyboard',
      imageUrl: img3,
      user: 'JessicaAlba'
    },
    {
      id: 4,
      title: 'Ergo-style keyboard',
      subject: 'A great keyboard',
      imageUrl: img4,
      user: 'Hailey'
    },
    {
      id: 5,
      title: 'Ergo-style keyboard',
      subject: 'A great keyboard',
      imageUrl: img5,
      user: 'RonaldMcDonald'
    },
    {
      id: 6,
      title: 'Gamer keyboard',
      subject: 'A great keyboard',
      imageUrl: img6,
      user: 'CalebHill'
    },
    {
      id: 7,
      title: 'Black and Gray board',
      subject: 'A great keyboard',
      imageUrl: img7,
      user: 'SteveJobs'
    }
  ]
  const [posts, setPosts] = useState([])
  const [user, setUser] = useOutletContext()
  const [isOpen, setIsOpen] = useState(false)
  const [tempTitle, setTempTitle] = useState('')
  const [tempImageUrl, setTempImageUrl] = useState('')
  const [id, setId] = useState(0);

  const setupPopup = (title, imageUrl, id) => {
    setTempTitle(title)
    setTempImageUrl(imageUrl)
    setId(id)
    setIsOpen(true)
  }

  const deletePost = async (tempId) => {
    let response
    try {
      response = await fetch(`/api/posts/${tempId}`, {
        method: 'DELETE'
      })
    } catch (e) {
      console.log('error', JSON.stringify(e))
      return
    }
    if (response.status !== 200) {
      console.log('error deleting post ', response)
      alert('post not deleted')
    }
    await fetchPosts();
  }

  const savePost = async () => {
    let response
    try {
      response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: tempTitle,
          imageUrl: tempImageUrl
        })
      })
    } catch (e) {
      console.log('error', JSON.stringify(e))
      return
    }
    if (response.status !== 200) {
      console.log('error saving post ', response)
      alert('post not saved')
    }
    const data = await response.json()
    console.log('response data', data)
    await fetchPosts();
    setIsOpen(false)
  }

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }
  const fetchPosts = async () => {
    const response = await fetch('/api/posts')
    const fetchedPosts = await response.json()
    setPosts(fetchedPosts.posts)
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  const getPosts = async () => {
    try {
      const response = await fetch('/api/posts')
      const fetchedPosts = await response.json()
      setPosts(fetchedPosts.posts)
    } catch (e) {
      console.log('error',JSON.stringify(e))
    }
  }

  const renderPosts = () => {
    const postsToRender = []
    for (const post of [...posts, ...hardCodedPosts]) {
      postsToRender.push(
        (
          <div className="feed-item card" key={post.id}>
            <img src={post.imageUrl} className="card-img-top" alt={post.subject} />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">
                <small className="text-muted">Posted by: @{post.user}</small>
                {
                  post.user === user.username ?
                  <>
                    <a className="clickyMode" onClick={() => setupPopup(post.title, post.imageUrl, post.id)}><i className="fa fa-pencil fa-fw"></i></a>
                    <a className="clickyMode" onClick={() => deletePost(post.id)}><i className="fa fa-trash fa-fw"></i></a>
                    {/*<input type="button" value="Edit" onClick={() => setupPopup(post.title, post.imageUrl, post.id)} />*/}
                    {/*<input type="button" value="Delete" onClick={() => deletePost(post.id)} />*/}
                  </>
                  : null
                }
              </p>
            </div>
          </div>
        )
      )
      {/*  <div className="feed-item card">*/}
      {/*    <img className="card-img-top" src={img7} alt="Caleb's Keyboard"/>*/}
      {/*      <div className="card-body">*/}
      {/*        <h5 className="card-title">Black and Gray board</h5>*/}
      {/*        <p className="card-text text-muted">by @SteveJobs</p>*/}
      {/*      </div>*/}
      {/*  </div>*/}
    }
    console.log(postsToRender)
    return postsToRender
  }

  return <div className="container">
    <div className="row">
      {!user.username ?
        <div className="col-12">
          <p><em>We see that you aren't logged in! To log in, simply enter your password and username. If you haven't
            made an account, just enter in a new username and password and you will be logged in with those as your new
            credentials!</em></p>
        </div> : null
      }
      <div className="col-sm-8">
        <div className="page-header header">
          <h1>Welcome to the Klique <br/><small>A community of like-minded keyboard hobbyists. Share your board with
            us!</small></h1>
          <div className="feed-grid">
            {renderPosts()}
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="action-center">
          <Link className="btn btn-primary btn-lg btn-block" to="/mongoCP/build/NewPost">
            New Post
          </Link>
        </div>
        <br/> <br/>
        <hr/>
        <br/>
        <h4>Getting Started:</h4>
        <p>
          To make a post, just click 'New Post' above. You can also edit or delete your posts by clicking the pencil or
          trash can icons on your posts.
        </p>
        <br/>
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
    {isOpen && <Edit
      content={<>
        <h5 className="card-title">New Post</h5>
        <div className="form-group">
          <label htmlFor="shortTitle">Short Title</label>
          <input type="text" className="form-control" id="shortTitle" name="title"
                 onChange={e => setTempTitle(e.target.value)} value={tempTitle}/>
        </div>
        <div className="form-group">
          <label htmlFor="image">URL to Image (upload it on a site like imgur and post the url here):</label>
          <input type="text" className="form-control-file" value={tempImageUrl}
                 onChange={e => setTempImageUrl(e.target.value)} id="image" name="image"/>
        </div>
        {/*<button type="submit" className="btn btn-primary" onClick={props.handleClose}>Save</button>*/}
        <button type="submit" className="btn btn-primary popup-button" onClick={savePost}>Save</button>
        <button type="submit" className="btn btn-primary" onClick={togglePopup}>Cancel</button>
      </>}
      // handleClose={togglePopup}
    />}
  </div>
};

export default Home;
