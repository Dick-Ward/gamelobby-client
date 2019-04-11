const url = "http://localhost:3000"

const getMessages = () =>{
  return fetch(`${url}/messages`)
  .then(res => res.json())
}

const sendMessage = (content) =>{
  return fetch(`${url}/messages`, {
    method: "POST",
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({user_id: 1, chatroom_id: 1, content})
  })
}

const api = {getMessages, sendMessage}

export default api
