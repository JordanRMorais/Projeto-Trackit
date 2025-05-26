import styled from "styled-components";
import logotipo from "../images/Logo.png"



export default function Cadastro (){

return (
<ContainerCadastro>

<img src={logotipo}></img>

<Dados>
    <input placeholder="email"></input>
    <input placeholder="senha"></input>
    <input placeholder="nome"></input>
    <input placeholder="foto"></input>
    <button>Cadastrar</button>
</Dados>

<p>Já tem uma conta? Faça login!</p>
</ContainerCadastro> 
)

}


const ContainerCadastro = styled.div `

width: 375px;
height: 675px;
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

}

`

const Dados = styled.div `
width: 310px;
height: 280px;
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