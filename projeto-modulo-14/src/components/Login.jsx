import styled from "styled-components";
import logotipo from "../images/Logo.png";
import { useNavigate } from "react-router-dom";



export default function Login (){

const navigate = useNavigate();

function IrParaCadastro() {
  navigate("/cadastro");
}


return (
<ContainerLogin>

<img src={logotipo}></img>

<Dados>
    <input placeholder="email"></input>
    <input placeholder="senha"></input>
    <button>Entrar</button>
</Dados>

<p onClick={IrParaCadastro}>Não tem uma conta? Cadastre-se!</p>
</ContainerLogin> 
)

}


const ContainerLogin = styled.div `

width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 100px;

p {
    font-family: "Lexend Deca";
    font-size: 14px;
    text-decoration: underline;
    color: rgba(82, 182, 255, 1);
    padding-top: 30px;
    cursor: pointer;

}

`

const Dados = styled.div `
width: 310px;
height: 170px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding-top: 20px;

input {
    width: 300px;
    height: 45px;
    border: 1px solid rgba(212, 212, 212, 1);
      
} 

::placeholder {
    color: rgba(219, 219, 219, 1);
    font-size: 20px;
    font-family: "Lexend Deca";
    padding-left: 10px;
 }

button {
    width: 300px;
    height: 45px;
    background-color: rgba(82, 182, 255, 1);
    font-size: 21px;
    color: white;
    border: none;
    border-radius: 5px;
    font-family: "Lexend Deca";

}

`