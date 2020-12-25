import React, {Component} from 'react';
import Navigator from './src/navigation/appStack';

//Initialize App wiht Navigaton Component --> Split
class App extends Component {
  render() {
    return (
      <Navigator/>
    );
  }
}

export default App;