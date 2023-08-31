import likebutton from "../../../public/assets/icons/likebutton.svg"
import coment from "../../../public/assets/icons/coment.svg"
import { StyledContainer, StyledImg } from "./style"

export default function ActionsButtonsPost(){
    return <StyledContainer>
        <button>
            <img src={likebutton} alt="seta transparente"/>
            <strong>1.2k</strong>
            <StyledImg src={likebutton} alt="seta transparente" />
        </button>
        <button>
            <img src={coment} alt="icone de comentar"/>
            <strong>122</strong>
        </button>
    </StyledContainer>
}