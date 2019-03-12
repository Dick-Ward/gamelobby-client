const url = "http://localhost:3000"

const getMessages = () =>{
  return fetch(`${url}/messages`)
  .then(res => res.json())
}

const api = {getMessages}

export default api
