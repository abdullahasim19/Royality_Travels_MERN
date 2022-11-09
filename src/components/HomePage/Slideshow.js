import React from 'react'

const Slideshow = () => {
  return (
    <div id="demo" className="carousel slide" data-ride="carousel">
    
    <ul className="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" className="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul>
  
    <div className="carousel-inner">
      <div className="carousel-item active ">
        <img className="img-fluid" src={require('../../images/carasol1.jpg')} alt="Los Angeles"/>
        <div className="carousel-caption">
          <h3>Welcome to Royality Travels</h3>
          
        </div>
      </div>
      <div className="carousel-item">
        <img  className="img-fluid" src={require('../../images/carasol2.jpg')} alt="Chicago"/>
        <div className="carousel-caption">
          <h3>Take some time off and travel</h3>
        </div>
      </div>
      <div className="carousel-item">
        <img className="img-fluid" src={require('../../images/carasol3.jpg')} alt="New York"/>
        <div className="carousel-caption">
          <h3>We will provide you with best services</h3>
        </div>
      </div>
    </div>
  
    <a className="carousel-control-prev" href="#demo" data-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </a>
    <a className="carousel-control-next" href="#demo" data-slide="next">
      <span className="carousel-control-next-icon"></span>
    </a>
  
  </div>
  )
}

export default Slideshow
