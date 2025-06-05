import styled from "styled-components";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

export default function Home (){

    const [habito,setHabito] =useState([]);
    const {user} = useContext(UserContext);
    const [limpaForm, setLimpaForm] = useState(false);
    const [nomeHabito, setNomeHabito] = useState("");
    const [diasSelecionados, setDiasSelecionados] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const navigate = useNavigate(); 

    useEffect(() => {
    if (!user?.token) return;

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
            }};

    axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        .then((res) => { setHabito(res.data);})
        .catch((err) => { alert("Erro ao carregar hábitos");
        });
    }, [user]);
  
    function IrParaHoje (){
        navigate("/hoje");
    }

    function SelecionarDia(index) {
        if (diasSelecionados.includes(index)) {
            setDiasSelecionados(diasSelecionados.filter((day) => day !== index));
            } 
        
        else {
            setDiasSelecionados([...diasSelecionados, index]);
            }
        }

    function cancelarCriacao() {
        setNomeHabito("");
        setDiasSelecionados([]);
        setLimpaForm(false);
    }

    function salvarHabito() {
        if (nomeHabito.trim() === "" || diasSelecionados.length === 0) {
            alert("Preencha o nome e selecione pelo menos um dia");
            return;
        }

    setCarregando(true);
        const body = {
            name: nomeHabito,
            days: diasSelecionados
    };

    const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };
    

    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
        .then((res) => {
                setHabito([...habito, res.data]);
                setNomeHabito("");
                setDiasSelecionados([]);
                setLimpaForm(false);
                setCarregando(false);
            })
        .catch(() => {
                alert("Erro ao salvar hábito");
                setCarregando(false);
            });
        }

return (
<ContainerHome>
    <Topo>
        <h1>TrackIt</h1>
        <img src={user?.image} alt="Foto do usuário" />
    </Topo>

    <Conteudo>
        <MenuSuperior>
            <h1>Meus Hábitos</h1>
            <button onClick={() => setLimpaForm(!limpaForm)}>+</button> 
        </MenuSuperior>
        {limpaForm && (
        <AddHabitos>
            <input placeholder="nome do hábito"
                    value={nomeHabito}
                    onChange={(e) => setNomeHabito(e.target.value)}
                    disabled={carregando}>
            </input>
            <DiasdaSemana>
                {["D", "S", "T", "Q", "Q", "S", "S"].map((dia, index) => (
                    <button
                        key={index}
                        onClick={() => SelecionarDia(index)}
                        style={{
                            backgroundColor: diasSelecionados.includes(index) ? "#CFCFCF" : "white",
                            color: diasSelecionados.includes(index) ? "white" : "#DBDBDB"
                        }}
                        disabled={carregando}
                    >
                        {dia}
                    </button>
                ))}
            </DiasdaSemana>
            <BotaoConfirmacao>
                 <BotaoCancelar>
                    <button onClick={cancelarCriacao} disabled={carregando}>Cancelar</button>
                </BotaoCancelar>
                <BotaoSalvar>
                    <button onClick={salvarHabito} disabled={carregando}>Salvar</button>
                </BotaoSalvar>
            </BotaoConfirmacao>
        </AddHabitos>
        )}
        
            {habito.length === 0 && (
            <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
            )}

        {habito.map((habito) => (
        <Habito key={habito.id}>
            <h1>{habito.name}</h1>
            <DiasdaSemana>
                {[0, 1, 2, 3, 4, 5, 6].map((dia) => (
                    <button
                        key={dia}
                        style={{
                            backgroundColor: habito.days.includes(dia) ? "#CFCFCF" : "white",
                            color: habito.days.includes(dia) ? "white" : "#DBDBDB"
                        }}
                    >
                        {["D", "S", "T", "Q", "Q", "S", "S"][dia]}
                    </button>
                ))}
            </DiasdaSemana>     
        </Habito>
    ))}
    </Conteudo>

    <MenuInferior>
        <BotaoHabitos>
            <button>
            <CalendarMonthIcon/> Hábitos
            </button>
        </BotaoHabitos>
        <BotaoHoje onClick={IrParaHoje}>
            <button>
            <EventAvailableSharpIcon/>Hoje
            </button>
        </BotaoHoje>
        
    </MenuInferior>

</ContainerHome>
)

}


const ContainerHome = styled.div `
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

img {
    width: 51px;
    height: 51px;
    border-radius: 98px;
    margin-right: 20px;
}

h1 {
    font-size: 40px;
    color: white;
    font-family: Playball;
    margin-left: 20px;
}
`
const Conteudo = styled.div`
width:100%;
height:100%;
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

button {
    width:40px;
    height:35px;
    border-radius: 5px;
    border: none;
    background-color:rgba(82, 182, 255, 1);
    font-size: 28px;
    color: white;
    margin: 20px;
}

`
const MenuInferior = styled.div `
display:flex;
position: fixed;
bottom:0;
max-width: 600px;
width: 100%;
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
    background-color: rgba(82, 182, 255, 1);
    border: none;
    color: white;
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
    background-color: white;
    color:rgba(212, 212, 212, 1);
    border:none;
    cursor: pointer;
}
`

const AddHabitos = styled.div `
width: 340px;
height: 180px;
background-color: white;
margin-left: 20px;
display: flex;
flex-direction: column;

input {
    width: 300px;
    height: 45px;
    margin-left: 20px;
    font-size:20px;
    font-family: Lexend Deca;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid rgba(212, 212, 212, 1);
}

::placeholder{
    padding-left: 10px;
    color: rgba(219, 219, 219, 1);
}
`

const DiasdaSemana = styled.div `
width: 260px;
display: flex;
justify-content: space-around;
margin-left: 15px;
margin-top: 10px;

button{
    width: 30px;
    height: 30px;
    color: rgba(212, 212, 212, 1);
    border: 1px solid rgba(212, 212, 212, 1);
}
`

const BotaoConfirmacao = styled.div `
display: flex;
justify-content: flex-end;
padding: 20px;
`
const BotaoCancelar = styled.div `
button{
    width: 84px;
    height: 35px;
    background-color:white;
    cursor: pointer;
    color:rgba(82, 182, 255, 1);
    border: none;
    font-size: 16px;
}
`
const BotaoSalvar = styled.div `
padding-left: 20px;
button{
    width: 84px;
    height: 35px;
    background-color:rgba(82, 182, 255, 1);
    border-radius: 5px;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
}
`
const Habito = styled.div `
width: 340px;
height: 100px;
background-color: white;
margin-left: 20px;
display: flex;
flex-direction: column;
margin-top: 20px;

`