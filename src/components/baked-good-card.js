import React from 'react';
import './style.css';

class BakedGood extends React.Component {
  render() {
    if(this.props.data) {
      var card = this.props.data.map(function(cards) {
        return(
          <div className="card text-white m-3">
            <img className="card-img-top" src={require(`../assets/${cards.image}`).default} alt="baked good" />
            <div className="card-body">
              <h5 className="card-title">{cards.title}</h5>
              <p className="card-text">{cards.description}</p>
              <a href={cards.link} className="card-link" target='_blank'>Recipe Link</a>
            </div>
          </div>
        )
      });
    }

    return(
      <div className= "container">
        <div className="row">
          <div className="col">
            {card}
          </div>
        </div>
      </div>
    )
  }
}

export default BakedGood;
