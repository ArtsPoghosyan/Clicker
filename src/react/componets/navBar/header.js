import React, {useState} from "react";
import logo from "../../../images/logo.jpg";
import "../../../scss/header.scss";
import night from "../../../images/night.png";
import TimeBar from "./timeBar";
import NavBar from "./navBar";
import 'animate.css';

function Header({path}){
    const [burgerMenu, setBurgerMenu] = useState("false");

    return(
        <>
        <div className="divHeader">
            <div className="divLogo"><img src={logo} /> <span >CPSTEST.CLICK</span></div>
            <div className="divSistem" id="divDesktop"><img src={night} /></div>
            <div className="divSistem" id="divMobile" onClick={()=>{
                if(burgerMenu === "false"){
                    setBurgerMenu(true) 
                }else if(burgerMenu === true){ 
                    setTimeout(()=>{setBurgerMenu("false")}, 100);
                    setBurgerMenu(!burgerMenu); 
                }else{
                    setBurgerMenu(!burgerMenu);
                }}}>
                <div className={burgerMenu === true ? "closeBurger" : "clos"}><span>+</span></div>
                <div id={burgerMenu !== true ? "burger" : "closs"}><i className="fa-solid fa-bars nav-menu"></i></div>
            </div>
        </div>
        {
            burgerMenu === "false"
                ? ""
                :<div className={burgerMenu === true ? "navItems animate__animated animate__fadeInLeft" : "navItems animate__animated animate__fadeOutLeft" }>
                    <NavBar path={path}/>
                    { path === "history" || path === "count" ? "" : <TimeBar path={"spaceCps"}/>}
                </div>
        }
        </>
    )
};

export default Header;