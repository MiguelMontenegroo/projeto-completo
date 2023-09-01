import logo from "../../../public/assets/icons/logo.svg"
import { StyledContainer } from "./style";

export default function Login() {
    return <StyledContainer>
    <div className="div1">  
      <img src={logo}/>
    <h1>LabeEddit</h1>
    <h2>O projeto de rede social da Labenu</h2>
    </div>  
    <div className="div2">
    <input type="email" placeholder="E-mail"/>
    <input type="password" placeholder="Senha" className="input2" />
    <button className="button1">Continuar</button>
    <hr/>
    <button className="button2">Crie uma Conta!</button>
    </div>
    </StyledContainer>;
  }