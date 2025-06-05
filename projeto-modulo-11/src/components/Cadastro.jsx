import styled from "styled-components";
import logotipo from "../images/Logo.png"
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Cadastro (){

const navigate = useNavigate();

const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [nome, setNome] = useState("");
const [foto, setFoto] = useState("");
const [loading, setLoading] = useState(false);

function enviarCadastro(e) {
    e.preventDefault();
    setLoading(true);
    
    const body = {
    email: email,
    name: nome,
    image: foto,
    password: senha,
    };

axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
    .then(() => {navigate("/");})
    .catch((err) => {alert(err.response.data.message);setLoading(false);});
    }

function IrParaLogin (){
    navigate("/");
} 

return (
<ContainerCadastro>
    <img src={logotipo}></img>
    <form onSubmit={enviarCadastro}>
    <Dados>
        <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
          <input
            type="password"
            placeholder="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            disabled={loading}
            required
          />
          <input
            type="text"
            placeholder="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            disabled={loading}
            required
          />
          <input
            type="url"
            placeholder="foto"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
            disabled={loading}
            required
          />
        <button type="submit" disabled={loading}>
            {loading ? <ClipLoader color="#ffffff" size={35}/> : "Cadastrar"}
        </button>
    </Dados>
</form>

<p onClick={IrParaLogin}>Já tem uma conta? Faça login!</p>
</ContainerCadastro> 
)}

const ContainerCadastro = styled.div `
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
    display: flex;
    justify-content: center;
    align-items: center;
}

`