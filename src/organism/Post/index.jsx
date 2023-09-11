import { useState } from "react";
import SentBy from "../../atom/SentBy";
import ActionsButtonsPost from "../ActionsButtonsPost";
import Coment from "../Coment";
import { StyledContainer } from "./style";
export default function Post() {
   const [likedState, setLikedState] = useState("")
   const [isCommentOpen, setIsCommentOpen] = useState(false)
    return <><StyledContainer>
        <SentBy />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Arcu risus quis varius quam quisque.
            Praesent elementum facilisis leo vel. Id neque aliquam</p>
            <ActionsButtonsPost setIsCommentOpen={setIsCommentOpen} likedState={likedState} setLikedState={setLikedState}/>
           
    </StyledContainer>
    {isCommentOpen ? <Coment/> : <></>}
    </>
}