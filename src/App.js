import React from 'react';
import Header from './components/header.js';
import BakedGood from './components/baked-good-card.js';
import TagList from './components/tag-list.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    const info = require('./data.json');
    this.setState({data: info});
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return(
      <div>
        <Header />
        <main>
          <section className="main">
            <BakedGood data={this.state.data.cards} />
          </section>
          <section className="sidebar">
            <h4>Tags</h4>
            <TagList data={this.state.data.cards} />
          </section>
        </main>
      </div>
    )
  }
}

export default App;
