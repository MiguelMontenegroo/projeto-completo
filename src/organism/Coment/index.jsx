import { useState } from "react"
import { StyledContainer } from "./style"

export default function Coment({onSubmit}){
const [content, setContent] = useState("")

    
    return <StyledContainer>
        <form onSubmit={(e)=> (onSubmit(content, e), setContent(""))}>
        <div>
            <input type="text" autoComplete="off" value={content} name="content" onChange={(e)=> {setContent(e.target.value)}} placeholder="Adicionar comentário"/>
        </div>
        <button type="submit">Responder</button>
        </form>
        <hr/>
    </StyledContainer>
}