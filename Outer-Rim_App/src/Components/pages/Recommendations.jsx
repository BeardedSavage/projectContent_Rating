import { useState } from 'react';
import './AppStyle.css';

function Recommendations() {
    
    const [recommend,setRecommendInput] = useState({
        name:'',
        feedback:''
    });

    const handleInput = (event) => {
        const {name, value} = event.target;
        setRecommendInput({...recommend, [name]: value});
    };

    const handleForm = (event) => {
        event.preventDefault();
        const confirmationMessage = `
        name: ${recommend.name},
        feedback: ${recommend.feedback}
        `;

        const isConfirmed = window.confirm(`Are you sure you want to enter this information: \n\n ${confirmationMessage}`);
        if (isConfirmed) {
            console.log ('Recommendation:', recommend);
            setRecommendInput ({
                name:'',
                feedback:''
            });
            alert('Thank you for your feedback!!! We welcome all your suggestions!');
        }

    };

    return (
            <>
            <div>
                <div className="form">
                    <h1>Recommendations</h1>
                    <form action="submit" onSubmit={handleForm}>
                        <textarea name="feedback"
                        placeholder="Enter your feedback here" 
                        className="recommend"
                        rows="20" cols="100" onChange={handleInput}></textarea> <br />
                        <input 
                        type="text"
                        name="name"
                        placeholder="Name Here"
                        onChange={handleInput}
                        /> <br />
                        <button className="submit-button">
                            Submit
                        </button><br />
                      </form>
                </div>
            </div>
            </>
        );
    };

export default Recommendations;