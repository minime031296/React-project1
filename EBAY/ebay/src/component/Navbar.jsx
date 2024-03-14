import { Link } from "react-router-dom";
import "./navbar.css"
import { FaGithub } from "react-icons/fa"
import { LiaBellSolid } from "react-icons/lia";
import { CgShoppingCart } from "react-icons/cg";
import NavbarSubOne from "./navbarsubone";
import NavbarTwo from "./navbartwo";
import NavbarThree from "./navbarthree";
import NavbarFour from "./navbarfour";
import NavbarFive from "./navbarfive";
import NavbarSix from "./navbarsix";
import NavbarSeven from "./navbarseven";
import NavbarEight from "./navbareight";


function Navbar() {

    
    return (
        <>
        <div id="box">
        <div className="one"><NavbarSubOne/></div>
        <div className="two"><NavbarTwo/></div>
        <div className="three"><NavbarThree/></div>
        <div className="four"><NavbarFour/></div>
        <div className="five"><NavbarFive/></div>
        <div className="six"><NavbarSix/></div>
        <div className="seven"><NavbarSeven/></div>
        <div className="eight"><NavbarEight/></div>
        </div>
        </>
      
    )
}

export default Navbar;