import React, { useRef, useEffect } from 'react';

import './style.scss';

function Header({menuState}) {

    const menuToggle = useRef();



    
    return ( 
        
        <section id="headerSection">
            <ul ref={menuToggle}>
                <li className={menuState ? "open" : "close"}>Intro</li>
                <li className={menuState ? "open" : "close"}>About</li>
                <li className={menuState ? "open" : "close"}>Featured</li>
            </ul>

            {/* <h1>Art <span>Objects</span> </h1> */}
            <div>
                <h1>ART</h1>
                <h1>OBJECTS</h1>
            </div>

        </section>
     )
}

export default Header;