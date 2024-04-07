import './App.css';

import React, {Component} from 'react';

class App extends Component {
  // 👇️ now using arrow function
  logProps = () => {
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <button onClick={this.logProps}>Log props</button>
      </div>
    );
  }
}

export default App;
