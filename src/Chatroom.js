import React, {Component} from 'react'
import api from './api'
import Message from './Message'


class Chatroom extends Component{
  state={
    messages: []
  }

  renderMessages(){
    return this.state.messages.map(message =>{
      return <Message key={message.id} message={message}/>
    })
  }

  render(){
    return(
      <div>
      {this.renderMessages()}
      </div>
    )
  }
  componentDidMount(){
    api.getMessages().then(messages =>{
      this.setState({messages: messages})
    })
  }
}

export default Chatroom
