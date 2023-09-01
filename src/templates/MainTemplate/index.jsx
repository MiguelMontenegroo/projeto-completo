
import { Outlet } from "react-router-dom";
import Header from "../../organism/Header";



function MainTemplate() {


  return <><Header/>


  
    <Outlet />
   </>;
}

export default MainTemplate;
