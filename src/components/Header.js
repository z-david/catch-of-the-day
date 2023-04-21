import React from "react";

// stateless functional component
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

// git remote add origin git@github.com:z-david/catch-of-the-day.git
// git config --global user.name "z-david"
// git config --global user.email ddwible@gmail.com
// ssh -T z-david@github.com
// git pull https://github.com/z-david/catch-of-the-day.git