import { useState } from "react";
import SentBy from "../../atom/SentBy";
import ActionsButtonsPost from "../ActionsButtonsPost";
import Coment from "../Coment";
import { StyledContainer } from "./style";
export default function Post({text, creator, likes, dislikes, comments, likeOrDislike, postId}) {
    
   const [likedState, setLikedState] = useState("")
   const [isCommentOpen, setIsCommentOpen] = useState(false)
    return <><StyledContainer>
        <SentBy creator={creator}/>
        <p>{text}</p>
            <ActionsButtonsPost likeOrDislike={likeOrDislike} postId={postId} likes={likes} dislikes={dislikes} comments={comments} setIsCommentOpen={setIsCommentOpen} likedState={likedState} setLikedState={setLikedState}/>
           
    </StyledContainer>
    {isCommentOpen ? <Coment/> : <></>}
    </>
}