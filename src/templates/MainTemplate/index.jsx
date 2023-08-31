
import { Outlet } from "react-router-dom";
import Header from "../../organism/Header";



function MainTemplate() {


  return <><Header/>


  
    <Outlet />
    <footer>Footer da página</footer></>;
}

export default MainTemplate;
