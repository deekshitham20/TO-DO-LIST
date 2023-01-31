const API_URL = `http://localhost:3000`
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NDA5Nzk2N30.qWRmOwg5Etdz_DNVgjogcDRYUSmvUczYbRi_4COM49Y`
export default (todo) => {
    return fetch(`${API_URL}/todos/${todo._id}`, {
        method : 'PUT',
        headers: {
            Authorization : `Bearer ${token}`,
            "Content-type" : 'application/json'
        },
    body: JSON.stringify({
        text : todo.text,
        completed : todo.completed
    })
}).then(res => res.json())
}