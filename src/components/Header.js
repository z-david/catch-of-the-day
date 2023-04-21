import React from "react";

// stateless functional component just returns a function
const Header = props => (  
    <header className="top">
        <h1>Catch 
            <span className="ofThe">
                <span className="of">of</span> 
                <span className="the">the</span>
            </span>
            Day
        </h1>
        <h3 className="taglilne">
            <span>{props.tagline}</span>
        </h3>
    </header>
);

export default Header