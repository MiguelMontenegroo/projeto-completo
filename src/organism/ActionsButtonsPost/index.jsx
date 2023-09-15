import likebutton from "../../../public/assets/icons/likebutton.svg"
import coment from "../../../public/assets/icons/coment.svg"
import { StyledContainer, StyledImg } from "./style"
import { goToHome } from "../../router/coordinator"
import { useNavigate } from "react-router-dom";

export default function ActionsButtonsPost({ likedState, setLikedState, setIsCommentOpen, likes, dislikes, comments, likeOrDislike, postId }) {

    const navigate = useNavigate();

    function handleActivateComment() {
        if (!/.\/home/.test(location.href)) {
            goToHome(navigate, postId)
        } 
    }

    return <StyledContainer>
        <div className={` transparent-with-border`}>
            <button onClick={() => {likeOrDislike(postId, true), setLikedState(prev => prev === "liked" ? "" : "liked") }} className="arrow-button">
                <img className={`${likedState === "liked" ? "select-liked" : ""}`} src={likebutton} alt="seta transparente" />
            </button>   
            <strong>{(likes - dislikes) || 0}</strong>
            <button onClick={() => {likeOrDislike(postId, false), setLikedState(prev => prev === "disliked" ? "" : "disliked") }} className="arrow-button">
                <StyledImg className={`${likedState === "disliked" ? "select-disliked" : ""}`} src={likebutton} alt="seta transparente" />
            </button>
        </div>
        {comments !== undefined && <button onClick={handleActivateComment} className="transparent-with-border">
            <img src={coment} alt="icone de comentar" />
            <strong>{comments || 0}</strong>
        </button>}
       
    </StyledContainer>
}