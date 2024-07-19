import React, { useState } from 'react';

const Recommendations = () => {
    const [recommend, setRecommend] = useState([]);
    const [recommendInput, setRecommendInput] = useState('');


    const handleRecommendInput = () => {
        if (setRecommendInput().trim() !== '') {
            setRecommend ([...recommend, {recommend: setRecommendInput, paragraph: [] }]);
            setRecommendInput('');
        }
    };

    return (
            <>
            <div>
                <h1>Recommendations</h1>
                <div>
                    {recommendInput.map((recommendation, index) => (
                        <div key={index} className="recommendation">
                            <p>{recommendation.recommend}</p>
                        </div>
                    ))}
                </div><br />
                <div>
                    <input 
                    type="text"
                    className="recommend-input"
                    value={recommendInput}
                    placholder="Recommendation Here"
                    onChange={(e) => {setRecommendInput(e.value.index);}}
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
        )
    }

export default Recommendations;