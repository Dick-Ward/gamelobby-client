import React from 'react'

const Message = (props) =>{
  return(
    <li className="message">
      {props.message.content}
    </li>
  )
}

export default Message
