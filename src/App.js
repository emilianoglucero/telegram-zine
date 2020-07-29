import React from 'react';
import './App.css';

import bg1 from './assets/img/bg/bg1.png'
import bg2 from './assets/img/bg/bg2.png'
import bg3 from './assets/img/bg/bg3.png'
import bg4 from './assets/img/bg/bg4.png'
import bg5 from './assets/img/bg/bg5.png'
import bg6 from './assets/img/bg/bg6.png'
import bg7 from './assets/img/bg/bg7.png'
import bg8 from './assets/img/bg/bg8.png'
import bg9 from './assets/img/bg/bg9.png'
import bg10 from './assets/img/bg/bg10.png'

import screenshot1 from './assets/img/Screenshot1.png';
import screenshot2 from './assets/img/Screenshot2.png';
import screenshot3 from './assets/img/Screenshot3.png';

import audio1 from './assets/audios/1.ogg';

import video1 from './assets/videos/1-1.webm';
import video2 from './assets/videos/1-2.webm';

function Background(props) {
  return (   
      <img
          className="bg"
          src={props.bg.imageUrl}
          alt={props.bg.name}
      /> 
  );
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

function Screenshot(props) {
  return (
    <div id={props.image.id} className="draggable">
      <img
          className="screenshot-img"
          src={props.image.imageUrl}
          alt={props.image.name}
      />
    </div>    
  );
}

//draggeable code for desktop https://codepen.io/mostafa2020/pen/NWWVbLR
document.addEventListener('DOMContentLoaded', function(event) {
  //the event occurred
  const user = document.getElementsByClassName("draggable");

  function catchItem(e) {
    this.style.left = e.pageX - this.clientWidth / 2 + "px";
    this.style.top = e.pageY - this.clientHeight / 2 + "px";
    this.onmousemove = function(e) {
    this.style.left = e.pageX - this.clientWidth / 2 + "px";
    this.style.top = e.pageY - this.clientHeight / 2 + "px";
    }
    this.onmouseup = function() {
    this.onmousemove = null; // onmouseup event [ redirect mousemove event signal to null instead of the drag-able element]
    }
  }
  //para poder draggear multiples divs tengo que loopear cada uno
  for (let index = 0; index < user.length; index++) {
    user[index].onmousedown = catchItem; 
  }

  //draggeable code for mobile https://medium.com/@deepakkadarivel/drag-and-drop-dnd-for-mobile-browsers-fc9bcd1ad3c5
  
  for (let index = 0; index < user.length; index++) {

    user[index].addEventListener('touchmove', function(e) {
      // grab the location of touch
      var touchLocation = e.targetTouches[0];

      // assign box new coordinates based on the touch.
      user[index].style.left = touchLocation.pageX + 'px';
      user[index].style.top = touchLocation.pageY + 'px';
    })
      
  }

})

//end of the draggeables images







const Screenshot1 = {

  imageUrl: screenshot1,
  name: 'screenshot1',
  id: "screenshot1"

};
const Screenshot2 = {

  imageUrl: screenshot2,
  name: 'screenshot2',
  id: "screenshot2"

};
const Screenshot3 = {

  imageUrl: screenshot3,
  name: 'screenshot3',
  id: "screenshot3"

};

function Video(props) {
  return (
    <div id={props.video.id} className="draggable">
      <video width={props.video.width} height={props.video.height} autoPlay loop>
        <source src={props.video.url} type="video/mp4"/>
      </video>
    </div>
  );
}

const Video1 = {
  url: video1,
  id: "video1"
}

const Video2 = {
  url: video2,
  id: "video1"
}

function Audio(props) {
  return (
    <audio className="audios" id={props.audio.id} controls>
      <source src={props.audio.ogg} type="audio/ogg"/>
    </audio>
  );
}

const Audio1 = {
  ogg: audio1,
  id: "audio1"
}


function App() {
  return (
    <div className="App">
      <header className="App-header">


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

      <Screenshot image={Screenshot1} />
      <Screenshot image={Screenshot2} />
      <Screenshot image={Screenshot3} />

      <Video  video={Video1}/>
      <Video  video={Video2}/>

      <Audio audio={Audio1} />


      {/* this is a comment in jsx */}
      </header>
    </div>
  );
}

export default App;
