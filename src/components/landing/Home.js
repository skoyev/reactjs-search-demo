import React from 'react';
import Section from './Section';
import Details from './Details';


const Home = () => {
    return (
        <div>
            <div className="container text-muted">
                <h2 className="display-4 text-center py-5 my-4">Project Technologies</h2>
                <Section/>
                <Details/>
            </div>
        </div>
    );
};



export default Home;
