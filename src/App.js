import React from 'react';
import Header from './components/header.js';
import BakedGood from './components/baked-good-card.js';

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
          <BakedGood data={this.state.data.cards} />
        </main>
      </div>
    )
  }
}

export default App;
