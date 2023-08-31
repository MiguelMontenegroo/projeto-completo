import closebuttongray2 from '../../../public/assets/icons/closebuttongray2.svg'
import logo from '../../../public/assets/icons/logo.svg'
import { StyledHeader } from './styles'

export default function Header() {
    return <>
    <StyledHeader >
        
            <img src={closebuttongray2} alt="icone de x cinza"/>
       
        
            <img src={logo} alt="quatro formas nas cores laranja saturado, laranja claro, cinza claro e cinza escuro"/>
        
        <button>Logout</button>
    </StyledHeader >
    </>
}