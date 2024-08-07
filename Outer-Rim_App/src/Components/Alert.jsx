import React, { useState } from "react";
import formData from "./Applications.jsx";

function Alert() {

    const [ form, setForm] = useState({formData});
    const [ hideForm, setHideForm ] = useState(true);

    const handleShowForm = () => {
        setHideForm({...hideForm(false)});
    };


    return (
        <>
        <div>
            <p>
                Thank you for your application. An admin will get with you once you make your ticket in the <a href="">Discord</a>. <br />
                Please check your information to see if it is correct. <br />
                When you make your ticket please enter the following in the ticket: <br />
                "This ticket is for my application"
            </p>
            {form.map (data => (
                <div>
                    <p>{data.name}</p>
                    <p>{data.gameName}</p>
                    <p>{data.experience}</p>
                    <p>{data.hours}</p>
                    <p>{data.serverHours}</p>
                    <p>{data.language}</p>
                    <p>{data.scene1}</p>
                    <p>{data.scene2}</p>
                    <p>{data.scene3}</p>
                </div>
            ))}
            <button onClick={handleShowForm}>Okay</button>
        </div>
        </>
    )

}

export default Alert;