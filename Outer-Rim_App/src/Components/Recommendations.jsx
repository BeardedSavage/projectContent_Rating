import { useState } from 'react';

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
        name: '',
        feedback: ''
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
                <h1>Recommendations</h1>
                <div>
                    <form action="submit" onSubmit={handleInput}>
                        <textarea name="feedback"
                        placholder="Enter your feedback here"></textarea> <br />
                        <input 
                        type="text"
                        name="name"
                        placholder="Name Here"
                        /> <br />
                        <button className="submit-button" onClick={handleForm}>
                            Submit
                        </button><br />
                      </form>
                </div>
            </div>
            </>
        );
    };

export default Recommendations;