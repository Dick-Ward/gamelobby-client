import React, {Component} from 'react'
import api from './api'
import Message from './Message'


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

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(prevState => {
      return {messages: [...prevState.messages, {content: prevState.newMessage}], newMessage: ""}
    })

  }

  render(){
    console.log(this.state)
    return(
      <div className="chatRoom">
      {this.renderMessages()}
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
