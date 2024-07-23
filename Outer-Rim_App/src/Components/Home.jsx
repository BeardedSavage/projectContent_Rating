import React, { Component } from 'react';
<<<<<<< HEAD
import Applications from './Applications';
=======
import Recommendations from './Recommendations';
>>>>>>> rec-component

class Home extends Component {
    constructor () {
        super ();
        }

    render() {
        return (
            <>
            <div>
                <section>
                    <h1>Welcome to Outer-Rim</h1>
<<<<<<< HEAD
                    <div>
                        <Applications/>
                    </div>
=======
                    <nav>
                        <a href="./Applications">Applications</a>
                    </nav>
>>>>>>> rec-component
                </section>
            </div>
            <div>
                <>
                    <Recommendations/>
                </>
            </div>
            </>
        );
    }
}

export default Home;