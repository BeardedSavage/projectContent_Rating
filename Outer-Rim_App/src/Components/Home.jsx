import React, { Component } from 'react';
import Applications from './Applications';

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
                    <div>
                        <Applications/>
                    </div>
                </section>
            </div>
            </>
        );
    }
}

export default Home;