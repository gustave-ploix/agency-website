import { useState } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';

import './style.scss'


export default function App() {

    const [deployMenu, setdeployMenu] = useState(false);


    return (
        <>
            <Navbar toggle={setdeployMenu} state={deployMenu}  />
            <Header menuState={deployMenu} />
        </>
    )
}