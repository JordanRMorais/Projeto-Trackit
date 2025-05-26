import styled from 'styled-components'
import Login from './components/Login'
import Cadastro from './components/Cadastro'
import Home from './components/Home'


export default function App() {
  
  return (
  <Container>
  {/* <Login/> */}
  {/* <Cadastro/> */}
  <Home/>
 
  </Container>
  )
 
      
  
}



const Container = styled.div `
width: 375px;
height: 670px;


`