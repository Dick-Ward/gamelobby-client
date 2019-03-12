import React from 'react'

const Message = (props) =>{
  return(
    <li>
      {props.message.content}
    </li>
  )
}

export default Message
