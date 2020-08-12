import React from 'react';

import bg1 from '../assets/img/bg/bg1.png'
import bg2 from '../assets/img/bg/bg2.png'
import bg3 from '../assets/img/bg/bg3.png'
import bg4 from '../assets/img/bg/bg4.png'
import bg5 from '../assets/img/bg/bg5.png'
import bg6 from '../assets/img/bg/bg6.png'
import bg7 from '../assets/img/bg/bg7.png'
import bg8 from '../assets/img/bg/bg8.png'
import bg9 from '../assets/img/bg/bg9.png'
import bg10 from '../assets/img/bg/bg10.png'
import bg11 from '../assets/img/bg/bg11.png'

function Background(props) {
    return (   
        <img
            className="bg"
            src={props.bg.imageUrl}
            alt={props.bg.name}
        /> 
    );
}

const BackgroundBuilder = () => {
    return(
        <div className="background-builder">
            <Background bg={Background1} />
            <Background bg={Background2} />
            <Background bg={Background3} />
            <Background bg={Background4} />
            <Background bg={Background5} />
            <Background bg={Background6} />
            <Background bg={Background7} />
            <Background bg={Background8} />
            <Background bg={Background9} />
            <Background bg={Background10} />
            <Background bg={Background11} />
        </div>
    )
}
  
  const Background1 = {
  
    imageUrl: bg1,
    name: 'screenshot1'
  
  };
  
  const Background2 = {
  
    imageUrl: bg2,
    name: 'screenshot1'
  
  };
  const Background3 = {
  
    imageUrl: bg3,
    name: 'screenshot1'
  
  };
  const Background4 = {
  
    imageUrl: bg4,
    name: 'screenshot1'
  
  };
  const Background5 = {
  
    imageUrl: bg5,
    name: 'screenshot1'
  
  };
  const Background6 = {
  
    imageUrl: bg6,
    name: 'screenshot1'
  
  };
  const Background7 = {
  
    imageUrl: bg7,
    name: 'screenshot1'
  
  };
  const Background8 = {
  
    imageUrl: bg8,
    name: 'screenshot1'
  
  };
  const Background9 = {
  
    imageUrl: bg9,
    name: 'screenshot1'
  
  };
  const Background10 = {
  
    imageUrl: bg10,
    name: 'screenshot1'
  
  };
  const Background11 = {
  
    imageUrl: bg11,
    name: 'screenshot1'
  
  };


  export default BackgroundBuilder;