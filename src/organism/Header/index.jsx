import closebuttongray2 from '../../../public/assets/icons/closebuttongray2.svg'
import logo from '../../../public/assets/icons/logo.svg'
import { StyledHeader } from './styles'
import { goToHomePrincipal, goToLogin } from '../../router/coordinator'
import { useNavigate } from 'react-router-dom'


export default function Header() {

const navigate = useNavigate()
return <>
    <StyledHeader >

            <button onClick={() => goToHomePrincipal(navigate)}>
           
            {/.\/home/.test(location.href) && <img src={closebuttongray2} alt="icone de x cinza"/>}
            </button>
       
             <img src={logo} alt="quatro formas nas cores laranja saturado, laranja claro, cinza claro e cinza escuro"/> 
       
        {<button onClick={()=> goToLogin(navigate)}>{/.\/cadastro/.test(location.href)? "Entrar": "Logout"}</button>}
    </StyledHeader >
    </>
}