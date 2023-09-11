import closebuttongray2 from '../../../public/assets/icons/closebuttongray2.svg'
import logo from '../../../public/assets/icons/logo.svg'
import { StyledHeader } from './styles'
import { goToLogin } from '../../router/coordinator'
import { useNavigate } from 'react-router-dom'


export default function Header() {

const navigate = useNavigate()
return <>
    <StyledHeader >
        
            <img src={closebuttongray2} alt="icone de x cinza"/>
       
       
             <img src={logo} alt="quatro formas nas cores laranja saturado, laranja claro, cinza claro e cinza escuro"/> 
       
        <button onClick={()=> goToLogin(navigate)}>Logout</button>
    </StyledHeader >
    </>
}