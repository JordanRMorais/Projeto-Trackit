import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import Login from './components/Login'
import Cadastro from './components/Cadastro'
import Home from './components/Home'


export default function App() {
  
  return (
  <BrowserRouter>
    <Container>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/hoje" element={<Home />} />
      </Routes>
    </Container>
  </BrowserRouter>
  )
 
  
}
const Container = styled.div `
max-width: 600px;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;

`