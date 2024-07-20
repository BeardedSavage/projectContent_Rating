import React, { useState } from 'react';

function Recommendations() {
    const [recommend, setRecommend] = useState([]);
    const [recommendInput, setRecommendInput] = useState('');


    const handleRecommendInput = (index) => {
        if (setRecommendInput(index) !== '') {
            setRecommend ([...recommend, recommendInput]);
            setRecommendInput('');
        }
    };

    return (
            <>
            <div>
                <h1>Recommendations</h1>
                <div>
                    {recommend.map((recommendation) => (
                        <ul className="recommendation">
                            <li key={recommend.id}>{recommendation.recommend}</li>
                        </ul>
                    ))}
                </div><br />
                <div>
                    <input 
                    type="text"
                    className="recommend-input"
                    value={recommendInput}
                    placholder="Recommendation Here"
                    onChange={(e) => {handleRecommendInput(e.target.value);}}
                     /> <br />
                     <input 
                     type="text"
                     className="name-input"
                     placholder="Name Here"
                      /> <br />
                      <button className="recommend-add" onClick={handleRecommendInput}>Add Recomendation</button>
                </div>
            </div>
            </>
        );
    };

export default Recommendations;