import styled from "styled-components";
import logotipo from "../images/Logo.png";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Oval } from 'react-loader-spinner';
import axios from "axios";
import UserContext from "../contexts/UserContext";



export default function Login ()

{

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    function IrParaCadastro() {
    navigate("/cadastro");
    }

    function FazerLogin(e){
    
        e.preventDefault();
        setLoading(true);

        const body = {email: email, password: senha};

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)

            .then ((res) => {setUser(res.data);
            localStorage.setItem("user", JSON.stringify(res.data));
            navigate("/habitos");
            })
            .catch((err) => {
                alert (err.response.data.message);
                setLoading(false)
            });
    }



return (
<ContainerLogin>

    <img src={logotipo} alt="logo"/>
    <form onSubmit={FazerLogin}>

    <Dados>
        <input placeholder="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
        required/>
        
        <input placeholder="senha"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required/>

        <button type="submit" disabled={loading}>
            {loading ? <Oval
                visible={true}
                height="30"
                width="30"
                color="#FFFFFF"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
                /> : "Entrar"}
        </button>
    </Dados>

    </form>
    <p onClick={IrParaCadastro}>Não tem uma conta? Cadastre-se!</p>
    
</ContainerLogin> 
)}


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