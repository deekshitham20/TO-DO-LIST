const API_URL = `http://localhost:3000`
export default (password) => {
    return fetch(`${API_URL}/login`, {
        method : 'POST',
        headers: {
            "Content-type" : 'application/json'
        },
    body: JSON.stringify({password})
    }).
then(res => {
    if(res.ok){
     return res.json()
    }
     else {
      throw new Error('Login failed')
     }
})
}
