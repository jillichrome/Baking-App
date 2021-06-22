import React from 'react';
import './style.css';

class TagList extends React.Component {
  render() {
    if(this.props.data) {
      var tagList = this.props.data.map(cards => {
        return (
          <ul className="tags">
            <li className="tag">{cards.tag}</li>
          </ul>
        )
      });
    }

    return(
      <div>
      {tagList}
      </div>
    )
  }
}

export default TagList;
