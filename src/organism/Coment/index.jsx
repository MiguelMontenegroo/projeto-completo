import { StyledContainer } from "./style"

export default function Coment(){
    return <StyledContainer>
        <div>
            <input type="text" placeholder="Adicionar comentário"/>
        </div>
        <button>Responder</button>
        <hr/>
    </StyledContainer>
}