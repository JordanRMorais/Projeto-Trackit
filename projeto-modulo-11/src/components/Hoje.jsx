import styled from "styled-components";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';
import CheckIcon from '@mui/icons-material/Check';
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useContext, useState } from "react";
import UserContext from "../contexts/UserContext";


export default function Hoje (){

    const { user } = useContext(UserContext);
    const navigate = useNavigate(); 
    const [habitosHoje, setHabitosHoje] = useState([]);

    useEffect(() => {
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    };
            
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
            .then((res) => { setHabitosHoje(res.data);})
            .catch((err) => {console.error("Erro ao buscar hábitos de hoje:", err.response?.data);
            });
        }, [user.token]);
    
    function toggleHabito(habito) {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };

        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/${habito.done ? "uncheck" : "check"}`;
        axios.post(url, {}, config)
            .then(() => {
                axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
                .then(res => setHabitosHoje(res.data));
                })
            .catch(err => {
                console.error("Erro ao atualizar hábito:", err.response?.data);
                });
    }

    function IrParaHabitos (){
        navigate("/habitos");
    }

    const hoje = dayjs().locale('pt-br').format('dddd, DD/MM');

return (
<ContainerHoje>
    <Topo>
        <h1>TrackIt</h1>
        <img src={user?.image} alt="Foto do usuário" />
    </Topo>

    <Conteudo>
        <MenuSuperior>
        <h1>{hoje.charAt(0).toUpperCase() + hoje.slice(1)}</h1>
        </MenuSuperior>
   
        {habitosHoje.length === 0 ? (
            <p style={{ marginLeft: "10px", color: "#666" }}>
                Nenhum hábito para hoje.
            </p>
        ) : (
            habitosHoje.map(h => (
                <Habito key={h.id}>
                    <Dados>
                        <h1>{h.name}</h1>
                        <p>Sequência atual: <span style={{ color: h.done ? "#8FC549" : "#666" }}>{h.currentSequence} dias</span></p>
                        <p>Seu recorde: <span style={{ color: h.currentSequence === h.highestSequence && h.highestSequence !== 0 ? "#8FC549" : "#666" }}>{h.highestSequence} dias</span></p>
                    </Dados>
                    <BotaoCheck>
                        <button onClick={() => toggleHabito(h)} style={{ backgroundColor: h.done ? "#8FC549" : "#EBEBEB" }}>
                            <CheckIcon style={{ fontSize: "40px", color: "#fff" }} />
                        </button>
                    </BotaoCheck>
                </Habito>      
                ))
            )}
  
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
width: 100%;
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
img {
    width: 51px;
    height: 51px;
    border-radius: 98px;
    margin-right: 20px;

}

`
const Conteudo = styled.div`
width:100%;
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
max-width: 600px;
width: 100%;
display:flex;
position: fixed;
bottom:0;
`
const BotaoHabitos = styled.div `
width: 50%;
button {
    width: 100%;
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
width: 50%;
button {
    width: 100%;
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
  height: 100px;
  background-color: white;
  margin: 10px auto;
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

