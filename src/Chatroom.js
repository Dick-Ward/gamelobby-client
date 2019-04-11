import React, {Component} from 'react'
import api from './api'
import Message from './Message'
import {ActionCableConsumer} from 'react-actioncable-provider'


class Chatroom extends Component{
  state={
    messages: [],
    newMessage: ""
  }

  renderMessages(){
    return this.state.messages.map(message =>{
      return <Message key={message.id} message={message}/>
    })
  }

  handleChange = (e) => {
    this.setState({newMessage: e.target.value})
  }

  addMessage = (message) =>{
    this.setState(prevState => {
      return {messages: [...prevState.messages, message], newMessage: ""}
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    api.sendMessage(this.state.newMessage)
    }




  render(){

    return(
      <div className="chatRoom">
      {this.renderMessages()}
      <ActionCableConsumer
        channel={{channel: "MessageChannel"}}
        onReceived={(message) => this.addMessage(message)}
      />
      <form onSubmit={this.handleSubmit} className="inputBar">
        <input onChange={this.handleChange} className="newMessage" name="newMessage" value={this.state.newMessage}/>
        <input type="submit" value=">"/>
      </form>
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
