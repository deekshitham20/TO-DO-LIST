//import { useEffect, useState} from 'react'
import './App.css'
import { Navigate, Route,Routes } from 'react-router-dom'
import { useState , useContext } from 'react'
import React from 'react'
import TodoPage from './pages/TodoPage'
import LoginPage from './pages/LoginPage'

export const TokenContext = React.createContext(null)

const ProtectedRoute =({element}) => {
  const [token] = useContext(TokenContext)
  return token ? element() :  <Navigate to="/login"/>
}
function App() {
  const [token,setToken] = useState(null)
  //const [todos,setTodos] = useState([])
  /*useEffect(()=>{
    readTodosRequest().then(setTodos)
  },[])*/
  return (
    <div className="App">
      <TokenContext.Provider value={[token,setToken]}>
      <Routes>
        <Route path="/" element={<ProtectedRoute element ={TodoPage}/>}/>
        <Route path="login" element={<LoginPage/>}/>
      </Routes>
      </TokenContext.Provider>
    </div>
  )
}

export default App
