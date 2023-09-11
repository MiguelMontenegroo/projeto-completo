import likebutton from "../../../public/assets/icons/likebutton.svg"
import coment from "../../../public/assets/icons/coment.svg"
import { StyledContainer, StyledImg } from "./style"
import { goToHome } from "../../router/coordinator"
import { useNavigate } from "react-router-dom";

export default function ActionsButtonsPost({ likedState, setLikedState, setIsCommentOpen }) {

    const navigate = useNavigate();

    function handleActivateComment() {
        if (!/.\/home/.test(location.href)) {
            goToHome(navigate)
        } else {
            setIsCommentOpen(prev => !prev)
        }
    }

    return <StyledContainer>
        <div className={` transparent-with-border`}>
            <button onClick={() => { setLikedState(prev => prev === "liked" ? "" : "liked") }} className="arrow-button">
                <img className={`${likedState === "liked" ? "select-liked" : ""}`} src={likebutton} alt="seta transparente" />
            </button>   
            <strong>1.2k</strong>
            <button onClick={() => { setLikedState(prev => prev === "disliked" ? "" : "disliked") }} className="arrow-button">
                <StyledImg className={`${likedState === "disliked" ? "select-disliked" : ""}`} src={likebutton} alt="seta transparente" />
            </button>
        </div>
        <button onClick={handleActivateComment} className="transparent-with-border">
            <img src={coment} alt="icone de comentar" />
            <strong>122</strong>
        </button>
    </StyledContainer>
}