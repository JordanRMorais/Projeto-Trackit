import styled from "styled-components";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';
import { useNavigate } from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check';

import axios from "axios";
import { useEffect, useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

export default function Hoje (){

    const { user } = useContext(UserContext);
    const navigate = useNavigate(); 

    
    function IrParaHabitos (){
        navigate("/habitos");
    }


return (
<ContainerHoje>
    <Topo>
        <h1>TrackIt</h1>
        {/* <img src={user?.image} alt="Foto do usuário" /> */}
    </Topo>

    <Conteudo>
        <MenuSuperior>
        <h1>Data do dia</h1>
        </MenuSuperior>
   
        <Habito>
            <Dados>
                <h1>Título</h1>
                <p>Sequência atual:</p>
                <p>Seu recorde:</p>
            </Dados>
            <BotaoCheck>
                <button>
                    <CheckIcon style={{ fontSize: "40px" }}/>
                </button>
            </BotaoCheck>
        </Habito>
  
    </Conteudo>

    <MenuInferior>
        <BotaoHabitos onClick={IrParaHabitos}>
            <button>
            <CalendarMonthIcon/> Hábitos
            </button>
        </BotaoHabitos>
        <BotaoHoje>
            <button>
            <EventAvailableSharpIcon/>Hoje
            </button>
        </BotaoHoje>
        
    </MenuInferior>

</ContainerHoje>
)

}


const ContainerHoje = styled.div `

width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const Topo = styled.div `

width: 375px;
height: 70px;
background-color:rgba(18, 107, 165, 1);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
display: flex;
align-items: center;
justify-content: space-between;

h1 {
    font-size: 40px;
    color: white;
    font-family: Playball;
    margin-left: 20px;

}
`
const Conteudo = styled.div`

width:375px;
height:100vh;
background-color: #f2f2f2;
display: flex;
flex-direction: column;


h1 {
    font-size:18px;
    font-family: Lexend Deca;
    margin: 10px;
    color: rgba(102, 102, 102, 1);
    margin-top: 20px;
}

`
const MenuSuperior = styled.div `
display: flex;
justify-content: space-between;


h1 {
    font-size:23px;
    font-family: Lexend Deca;
    color: rgba(18, 107, 165, 1);
    margin-top: 20px;

}


`
const MenuInferior = styled.div `
display:flex;
position: fixed;
bottom:0;

`
const BotaoHabitos = styled.div `
button {
    width: 188px;
    height: 65px;
    font-size: 18px;
    font-family: Lexend Deca;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: none;
    color: rgba(212, 212, 212, 1);
    cursor: pointer;
}
`
const BotaoHoje = styled.div `
button {
    width: 188px;
    height: 65px;
    font-size: 18px;
    font-family: Lexend Deca;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(82, 182, 255, 1);
    color:white;
    border:none;
    cursor: pointer;
     
}
`
const Habito = styled.div `
  width: 320px;
  height: 80px;
  background-color: white;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 5px;
  `

const BotaoCheck = styled.div `
   button {
    width: 70px;
    height: 70px;
    background-color: #8FC549;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    
} 
`


const Dados = styled.div `

  display: flex;
  flex-direction: column;
  gap: 5px;

h1 {
    font-size: 20px;
    color: rgba(102, 102, 102, 1);
    font-family: Lexend Deca;
    margin-left: 10px;

}

p {
    font-size: 13px;
    color: rgba(102, 102, 102, 1);
    font-family: Lexend Deca;
    margin-left: 10px;

}

`

