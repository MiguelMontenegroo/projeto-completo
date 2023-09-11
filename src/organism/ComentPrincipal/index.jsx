import { useNavigate } from "react-router-dom";
import { goToHome } from "../../router/coordinator"
import { StyledContainer } from "./style"

export default function ComentPrincipal(){
    const navigate = useNavigate();
    return <StyledContainer>
        <div>
            <input type="text" placeholder="Escreva seu post"/>
        </div>
        <button onClick={() => goToHome(navigate)}>Postar</button>
        <hr/>
    </StyledContainer>
}