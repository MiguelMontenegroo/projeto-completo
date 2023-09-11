import { StyledContainer } from "./style";
import Post from "../../organism/Post";
import ComentPrincipal from "../../organism/ComentPrincipal";

export default function HomePrincipal() {
    return <StyledContainer>
      <div className="wrapper">
      <ComentPrincipal/>
    <Post/>
   
    </div>
    </StyledContainer>;
  }
  