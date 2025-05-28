import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Home from './components/Home';
import Hoje from './components/Hoje';
import { useState } from 'react';
import UserContext from "./contexts/UserContext";



export default function App() {

  const [user,setUser] = useState(null);


  
  return (
  <UserContext.Provider value = {{user, setUser}}>
    <BrowserRouter>
      <Container>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/habitos" element={<Home />} />
            <Route path="/hoje" element={<Hoje />} />
        </Routes>
      </Container>
    </BrowserRouter>
  </UserContext.Provider>
  )
 
  
}
const Container = styled.div `
max-width: 600px;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;

`