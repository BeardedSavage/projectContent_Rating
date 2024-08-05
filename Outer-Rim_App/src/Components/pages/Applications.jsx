import { useEffect, useState } from 'react';
import './AppStyle.css';

function Applications() {
    
    const [formData, setFormData] = useState({
        name: '',
        gameName: '',
        experience: '',
        hours: '',
        serverHours: '',
        language: '',
        scene1: '',
        scene2: '',
        scene3: ''
    });

    const handleForm = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value
        }); 
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = `
        Name: ${formData.name}
        GameName: ${formData.gameName}
        Experience: ${formData.experience}
        Hours: ${formData.hours}
        ServerHours: ${formData.serverHours}
        Language: ${formData.language}
        Scene1: ${formData.scene1}
        Scene2: ${formData.scene2}
        Scene3: ${formData.scene3}
        `;

        const isConfirmed = window.confirm(`Please confirm the information you submitted is correct:\n\n ${confirmationMessage}`);
        if (isConfirmed) {
            console.log('App Submission:', formData);
            setFormData({
                name: '',
                gameName: '',
                experience: '',
                hours: '',
                serverHours: '',
                language: '',
                scene1: '',
                scene2: '',
                scene3: ''
            });
            alert(
            'Thank you for your Application. It will be reviewed then an admin of the server will get with you.'
            );
        }
    };

    return(
        <div className="form">
            <h1>Applications</h1>
            <form action="submit" className="app-submit" onSubmit={handleSubmit}>
                <p className="form">
                Discord Name <br />
                <input type="text" name="name" onChange={handleForm} />
                </p>
                <p className="form">
                In-Game Name <br />
                <input type="text" name="gameName" onChange={handleForm} />
                </p>
                <p className="form">
                What experience do you have with servers? <br />
                <input type="text" name="experience" onChange={handleForm} />
                </p>
                <p className="form">
                How many hours do you have in DayZ? <br />
                <input type="text" name="hours" onChange={handleForm} />
                </p>
                <p className="form">
                How long have you been a part of the server? <br />
                <input type="text" name="serverHours" onChange={handleForm} />
                </p>
                <p className="form">
                What programing laguage do you understand? <br />
                <input type="text" name="language" onChange={handleForm} />
                </p>
                <p className="form">
                If you encounter someone that has lost there vehicle multiple times, with reimbursment from another admin, <br />
                and comes to you without a ticket and asks for a
                reimburstment because they lost there vehicle agian. What do you do? <br />
                <textarea name="scene1" onChange={handleForm} rows="10" cols="50" />
                </p>  
                <p className="form">
                Extension to scene 1. <br />
                If there is no reimburstment and they offer to donate or give you money for a new vehicle, What is your response? <br /><textarea name="scene2" onChange={handleForm} rows="10" cols="50" />
                </p>
                <p className="form">
                Finally, if you encounter someone that is hate speeching, or making harassing statments toward staff members and there is no 
                Head Admin around, what do you do? <br />
                <textarea name="scene3" onChange={handleForm} rows="10" cols="50" />
                </p> <br />
                <button type="submit" className="submit">Submmision</button>
            </form>
        </div>
    )
}

export default Applications;