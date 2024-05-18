import React from 'react'
import { Link } from 'react-router-dom'
const Navbar =()=> {
  


    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <Link className="navbar-brand" to="/News-App/">News App</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active"><Link className="nav-link" to="/News-App/news">News</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/News-App/business">Business</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/News-App/entertainment">Entertainment</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/News-App/general">General</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/News-App/health">Health</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/News-App/science">Science</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/News-App/sports">Sports</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/News-App/technology">Technology</Link></li>
     
    </ul>
    
  </div>
</nav>
      </div>
    )

}

export default Navbar
