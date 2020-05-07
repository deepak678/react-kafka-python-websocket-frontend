import React from 'react'
import Websocket from 'react-websocket';

class Consumer extends React.Component {
    constructor(props){
    super(props);
    this.state = { messages : [] }
  }

  componentDidMount(){
    // this is an "echo" websocket service
    this.connection = new WebSocket('wss://localhost:8765');
    // listen to onmessage event
    this.connection.onmessage = evt => { 
      // add the new message to state
        this.setState({
        messages : this.state.messages.concat([ evt.data ])
      })
    };

  }

  render() {
    // slice(-5) gives us the five most recent messages
    return <ul>{ this.state.messages.slice(-5).map( (msg, idx) => <li key={'msg-' + idx }>{ msg }</li> )}</ul>;
  }
};
export default Consumer;