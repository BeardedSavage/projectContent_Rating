import React, { useState } from "react";
import './AppStyle.css';
import { Link } from "react-router-dom";

function NavBar () {

    return (
        <>
            <div className="nav-container">
                <Link className="home" to="/"><img 
                src="https://cdn.discordapp.com/attachments/1155163900216614992/1252017188525572106/Designer-_outer-rim_2.jpg?ex=66a0255f&is=669ed3df&hm=60e830afc6ae8ba40602fe60d809a0ab0dd552443d0954647a6f7f1a1e4a431f&" 
                className="logo"/></Link>
                <ul>
                    <li>
                        <Link className="recommend" to="/recommend">Recommendations</Link>
                    </li>
                    <li>
                        <Link className="apps" to="apps">Applications</Link>
                    </li>
                </ul>
            </div>  
        </>
    );
}

export default NavBar;