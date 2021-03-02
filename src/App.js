import React from 'react';
import Header from './components/header.js';
import BakedGood from './components/baked-good-card.js';

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <main>
          <BakedGood />
        </main>
      </div>
    )
  }
}

export default App;
