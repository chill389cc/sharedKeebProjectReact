import { Outlet, Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import backgroundImage from "./../img/flickr-banner.jpg"

const Layout = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState({})

  const login = async () => {
    let response
    try {
      response = await fetch('/apj/user/' + username + '/' + password)
    } catch (e) {
      console.log('error',JSON.stringify(e))
      return
    }
    //   console.log('error in logging in ', e)
    // }
    if (response.status === 200) {
      let fetchedUser = await response.json()
      setUser(fetchedUser.user)
    } else if (response.status === 401) {
      alert('incorrect password')
    } else {
      console.log('error in logging in ', response)
    }
  }

  return (
    <>
      <div className="card banner bg-dark text-white">
        <img className="card-img" src={backgroundImage} style={{opacity: 0.5}} alt="Keyboard"/>
          <div className="card-img-overlay centered">
            <h1 className="card-title">Keyboard Klique</h1>
          </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Link className="navbar-brand" to="/">Keyboard Klique</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            { user.username ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link"  to="" onClick={() => setUser({})}>Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
                  <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                  <button className="btn btn-primary loginButton" onClick={login}>Login/Register</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      <Outlet context={[user, setUser]}  />

      <footer className="bg-dark">
        <div className="container">
          <div className="row text-light">
            <div className="col-sm text-center">
              <p>© 2022 Keyboard Klique</p>
              <p>All Images are property of Caleb Hill</p>
            </div>
            <div className="col-sm"></div>
            <div className="col-sm">
              <p>Authors:</p>
              <p>Caleb Hill</p>
              <p>Ethan Borsky</p>
              <a href="https://github.com/chill389cc/sharedKeebProjectReact">GitHub Repo</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
};

export default Layout;
