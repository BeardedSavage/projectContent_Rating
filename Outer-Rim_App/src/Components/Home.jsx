import React, { Component } from 'react';
import Recommendations from './Recommendations';

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
                    <nav>
                        <a href="./Applications">Applications</a>
                    </nav>
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