import React from 'react'
import axios from 'axios'

class Producer extends React.Component {
    constructor(){
        super()
        this.state={
             msg: ""
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleClick(){
        axios.post(
            'http://localhost:5000/',this.state
          )
          this.setState({msg: ""})
    }

    handleChange(event){
        this.setState({msg : event.target.value})

    }

    render(){
        return(
            <div>
                <h1>Enter Message to be send</h1>
                <input type="text" onChange={event => this.handleChange(event)} value={this.state.msg} />
                <button type='button' onClick={this.handleClick}>Send Message</button>
            </div>
        )
    }
}

export default Producer;