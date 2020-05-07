import React from 'react';
import './App.css';
import SplitPane from 'react-split-pane'

import Producer from './Components/Producer'
import Consumer from './Components/Consumer'

class App extends React.Component {
  render(){
    return (
      <SplitPane split="vertical" defaultSize={200} primary="second">
       <Producer />
      <Consumer />
      </SplitPane>);
}
}

export default App;
