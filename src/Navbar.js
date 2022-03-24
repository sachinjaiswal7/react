import React from "react";


function Navbar(){
    const clicked = (name)=>{
     console.log(`${name} was clicked`)
    }
    return(
        <>
        <nav>
            <img src="" alt="No Image" className="logo" />
            <ul className="nav">
                <li className="links"><a  onClick={()=>clicked("sachin")} href="/">About us</a></li>
                <li className="links"><a href="">getMore</a></li>
                <li className="links"><a href="">Player</a></li>
                </ul>
        </nav>
        </>
    )
}
export default Navbar