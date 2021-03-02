import React from 'react';
import './style.css';

var BakedGood = () => (
  <div className= "container">

    <div className="row">
      <div className="col">
        <div className="card text-white m-3">
          <img />
          <div className="card-body">
            <h5 className="card-title">Title</h5>
            <p className="card-text">Brief description of baked good.</p>
            <a href="#" className="card-link">Recipe Link</a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-white m-3">
          <img />
          <div className="card-body">
            <h5 className="card-title">Title</h5>
            <p className="card-text">Brief description of baked good.</p>
            <a href="#" className="card-link">Recipe Link</a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-white m-3">
          <img />
          <div className="card-body">
            <h5 className="card-title">Title</h5>
            <p className="card-text">Brief description of baked good.</p>
            <a href="#" className="card-link">Recipe Link</a>
          </div>
        </div>
      </div>
    </div>

  </div>
)

export default BakedGood;
