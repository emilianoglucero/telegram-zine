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


import audio1 from './assets/audios/01-1.ogg';
import audio21 from './assets/audios/02-21.ogg';
import audio22 from './assets/audios/03-22.ogg';
import audio23 from './assets/audios/04-23.ogg';
import audio31 from './assets/audios/05-31.ogg';
import audio32 from './assets/audios/06-32.ogg';
import audio33 from './assets/audios/07-33.ogg';
import audio40 from './assets/audios/08-40.ogg';
import audio50 from './assets/audios/09-50.ogg';
import audio60 from './assets/audios/10-60.ogg';
import audio70 from './assets/audios/11-70.ogg';
import audio80 from './assets/audios/12-80.ogg';
import audio90 from './assets/audios/12-90.ogg';
import audio100 from './assets/audios/13-100.ogg';
import audio110 from './assets/audios/14-110.ogg';
import audio120 from './assets/audios/15-120.ogg';
import audio130 from './assets/audios/16-130.ogg';
import audio140 from './assets/audios/17-140.ogg';
import audio150 from './assets/audios/18-150.ogg';
import audio160 from './assets/audios/19-160.ogg';
import audio161 from './assets/audios/19-161.ogg';
import audio170 from './assets/audios/20-170.ogg';
import audio180 from './assets/audios/21-180.ogg';
import audio190 from './assets/audios/22-190.ogg';
import audio191 from './assets/audios/23-191.ogg';
import audio192 from './assets/audios/24-192.ogg';
import audio193 from './assets/audios/25-193.ogg';
import audio194 from './assets/audios/26-194.ogg';
import audio195 from './assets/audios/27-195.ogg';
import audio196 from './assets/audios/28-196.ogg';
import audio197 from './assets/audios/29-197.ogg';
import audio200 from './assets/audios/30-200.ogg';
import audio201 from './assets/audios/31-201.ogg';
import audio202 from './assets/audios/32-202.ogg';
import audio210 from './assets/audios/33-210.ogg';
import audio211 from './assets/audios/34-211.ogg';
import audio212 from './assets/audios/35-212.ogg';
import audio213 from './assets/audios/36-213.ogg';
import audio214 from './assets/audios/37-214.ogg';
import audio220 from './assets/audios/38-220.ogg';


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
    <div className="draggable">
      <video id={props.video.id} width={props.video.width} height={props.video.height} autoPlay loop>
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

const Audio21 = {
  ogg: audio21,
  id: "audio21"
}

const Audio22 = {
  ogg: audio22,
  id: "audio22"
}

const Audio23 = {
  ogg: audio23,
  id: "audio23"
}

const Audio31 = {
  ogg: audio31,
  id: "audio31"
}

const Audio32 = {
  ogg: audio32,
  id: "audio32"
}

const Audio33 = {
  ogg: audio33,
  id: "audio33"
}

const Audio40 = {
  ogg: audio40,
  id: "audio40"
}

const Audio50 = {
  ogg: audio50,
  id: "audio50"
}

const Audio60 = {
  ogg: audio60,
  id: "audio60"
}

const Audio70 = {
  ogg: audio70,
  id: "audio70"
}

const Audio80 = {
  ogg: audio80,
  id: "audio80"
}

const Audio90 = {
  ogg: audio90,
  id: "audio90"
}

const Audio100 = {
  ogg: audio100,
  id: "audio100"
}

const Audio110 = {
  ogg: audio110,
  id: "audio110"
}

const Audio120 = {
  ogg: audio120,
  id: "audio120"
}

const Audio130 = {
  ogg: audio130,
  id: "audio130"
}

const Audio140 = {
  ogg: audio140,
  id: "audio140"
}

const Audio150 = {
  ogg: audio150,
  id: "audio150"
}

const Audio160 = {
  ogg: audio160,
  id: "audio160"
}

const Audio161 = {
  ogg: audio161,
  id: "audio161"
}

const Audio170 = {
  ogg: audio170,
  id: "audio170"
}

const Audio180 = {
  ogg: audio180,
  id: "audio180"
}

const Audio190 = {
  ogg: audio190,
  id: "audio190"
}

const Audio191 = {
  ogg: audio191,
  id: "audio191"
}
const Audio192 = {
  ogg: audio192,
  id: "audio192"
}
const Audio193 = {
  ogg: audio193,
  id: "audio193"
}
const Audio194 = {
  ogg: audio194,
  id: "audio194"
}
const Audio195 = {
  ogg: audio195,
  id: "audio195"
}
const Audio196 = {
  ogg: audio196,
  id: "audio196"
}
const Audio197 = {
  ogg: audio197,
  id: "audio197"
}

const Audio200 = {
  ogg: audio200,
  id: "audio200"
}
const Audio201 = {
  ogg: audio201,
  id: "audio201"
}
const Audio202 = {
  ogg: audio202,
  id: "audio202"
}
const Audio210 = {
  ogg: audio210,
  id: "audio210"
}
const Audio211 = {
  ogg: audio211,
  id: "audio211"
}
const Audio212 = {
  ogg: audio212,
  id: "audio212"
}
const Audio213 = {
  ogg: audio213,
  id: "audio213"
}
const Audio214 = {
  ogg: audio214,
  id: "audio214"
}
const Audio220 = {
  ogg: audio220,
  id: "audio220"
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
      <Audio audio={Audio21} />
      <Audio audio={Audio22} />
      <Audio audio={Audio23} />

      <Audio audio={Audio31} />
      <Audio audio={Audio32} />
      <Audio audio={Audio33} />

      <Audio audio={Audio40} />
      <Audio audio={Audio50} />
      <Audio audio={Audio60} />
      <Audio audio={Audio70} />
      <Audio audio={Audio80} />
      <Audio audio={Audio90} />
      <Audio audio={Audio100} />
      <Audio audio={Audio110} />
      <Audio audio={Audio120} />
      <Audio audio={Audio130} />
      <Audio audio={Audio140} />
      <Audio audio={Audio150} />
      <Audio audio={Audio160} />
      <Audio audio={Audio161} />

      <Audio audio={Audio170} />
      <Audio audio={Audio180} />

      <Audio audio={Audio190} />
      <Audio audio={Audio191} />
      <Audio audio={Audio192} />
      <Audio audio={Audio193} />
      <Audio audio={Audio194} />
      <Audio audio={Audio195} />
      <Audio audio={Audio196} />
      <Audio audio={Audio197} />

      <Audio audio={Audio200} />
      <Audio audio={Audio201} />
      <Audio audio={Audio202} />

      <Audio audio={Audio210} />
      <Audio audio={Audio211} />
      <Audio audio={Audio212} />
      <Audio audio={Audio213} />
      <Audio audio={Audio214} />

      <Audio audio={Audio220} />
      



      {/* this is a comment in jsx */}
      </header>
    </div>
  );
}

export default App;
