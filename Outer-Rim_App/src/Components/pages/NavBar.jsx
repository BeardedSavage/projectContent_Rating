import React, { useState } from "react";
import './AppStyle.css';
import { Link } from "react-router-dom";

function NavBar () {

    return (
        <>
            <div className="nav-container">
                <Link className="home" to="/"><img 
                src="./images/Designer-_outer-rim_2.jpg"
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