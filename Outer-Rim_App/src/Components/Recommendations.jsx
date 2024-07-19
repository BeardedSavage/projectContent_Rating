import React, { Component } from 'react';
import {useState} from 'react';

class Recommendations extends Component {
    constructor () {
        super();
    }

    render () {
        return (
            <>
            <div>
                <header>
                    <h1 className="header">Recommendations</h1>
                </header>
                <section>
                    <p>
                        I love this server and this community. The admins are always around to help out, they do whatever is neccessary
                        to make sure your experience is the best. Highly recommend this server to anyone looking for a interactive 
                        community.
                    </p>
                    <p className="name">
                        ~BeardedSavage
                    </p>
                </section>
                <section>
                    <form className="form">
                        <h2>Submit Your Recommendation Here</h2><br />
                        <legend>Enter Name</legend><br />
                        <input type="text" className="name" /> <br />
                        <legend>Enter Recommendation</legend> <br />
                        <input type="text" className="recommendation" /> <br />
                        <button>Submit</button>
                    </form>
                </section>
            </div>
            </>
        )
    }
}

export default Recommendations;