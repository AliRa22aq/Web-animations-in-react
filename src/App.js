import React, { useEffect, useRef } from 'react';
import './App.css';
import useWebAnimations,{headShake} from "@wellyshen/use-web-animations";
import Queen_and_alice from './components/queen_and_alice'
import Background1 from './components/background1';
import Background2 from './components/background2';
import Forground1 from './components/Forground1';
import Forground2 from './components/Forground2';



function App() {

  return (
    <div>
        <div class="sky"></div>
        <div class="earth">
            <Queen_and_alice />
        </div>
        <Background1 />
        <Background2 />
        <Forground1 />
        <Forground2 />

    </div>
    
    );
}

export default App;
