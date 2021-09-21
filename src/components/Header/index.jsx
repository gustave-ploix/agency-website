import React, { useRef, useEffect } from 'react';

import './style.scss';

function Header({menuState}) {

    const menuToggle = useRef();



    
    return ( 
        <section>
            <ul className={menuState ? "open" : "close"} ref={menuToggle}>
                <li>Intro</li>
                <li>About</li>
                <li>Featured</li>
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