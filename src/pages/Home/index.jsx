import { StyledContainer } from "./style";
import Coment from "../../organism/Coment";
import Post from "../../organism/Post";

export default function Home() {
    return <StyledContainer>
      <div className="wrapper">
    <Post/>
   <Post/>
   <Post/>
   <Post/>
   <Post/>
    </div>
    </StyledContainer>;
  }
  