//import React from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';
import './App-mobile.css';
import './App-mobile-galaxy.css';

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
import bg11 from './assets/img/bg/bg11.png'

import screenshot1 from './assets/img/Screenshot1.png';
import screenshot2 from './assets/img/Screenshot2.png';
import screenshot3 from './assets/img/Screenshot3.png';
import screenshot4 from './assets/img/Screenshot4.png';
import screenshot5 from './assets/img/Screenshot5.png';
import screenshot6 from './assets/img/Screenshot6.png';
import screenshot7 from './assets/img/Screenshot7.png';
import screenshot8 from './assets/img/Screenshot8.png';
import screenshot9 from './assets/img/Screenshot9.png';
import screenshot10 from './assets/img/Screenshot10.png';
import screenshot11 from './assets/img/Screenshot11.png';
import screenshot12 from './assets/img/Screenshot12.png';
import screenshot13 from './assets/img/Screenshot13.png';
import screenshot14 from './assets/img/Screenshot14.png';
import screenshot15 from './assets/img/Screenshot15.png';
import screenshot16 from './assets/img/Screenshot16.png';
import screenshot17 from './assets/img/Screenshot17.png';
import screenshot18 from './assets/img/Screenshot18.png';
import screenshot19 from './assets/img/Screenshot19.png';
import screenshot20 from './assets/img/Screenshot20.png';
import screenshot21 from './assets/img/Screenshot21.png';
import screenshot22 from './assets/img/Screenshot22.png';
import screenshot23 from './assets/img/Screenshot23.png';
import screenshot24 from './assets/img/Screenshot24.png';
import screenshot25 from './assets/img/Screenshot25.png';
import screenshot26 from './assets/img/Screenshot26.png';
import screenshot27 from './assets/img/Screenshot27.png';
import screenshot28 from './assets/img/Screenshot28.png';
import screenshot29 from './assets/img/Screenshot29.png';
import screenshot30 from './assets/img/Screenshot30.png';
import screenshot31 from './assets/img/Screenshot31.png';
import screenshot32 from './assets/img/Screenshot32.png';
import screenshot33 from './assets/img/Screenshot33.png';
import screenshot34 from './assets/img/Screenshot34.png';
import screenshot35 from './assets/img/Screenshot35.png';
import screenshot36 from './assets/img/Screenshot36.png';
import screenshot37 from './assets/img/Screenshot37.png';
import screenshot38 from './assets/img/Screenshot38.png';
import screenshot39 from './assets/img/Screenshot39.png';
import screenshot40 from './assets/img/Screenshot40.png';
import screenshot41 from './assets/img/Screenshot41.png';
import screenshot42 from './assets/img/Screenshot42.png';
import screenshot43 from './assets/img/Screenshot43.png';
import screenshot44 from './assets/img/Screenshot44.png';
import screenshot45 from './assets/img/Screenshot45.png';
import screenshot46 from './assets/img/Screenshot46.png';


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


import video1 from './assets/videos/1.webm';
import video2 from './assets/videos/1-1.webm';
import video3 from './assets/videos/1-2.webm';
import video4 from './assets/videos/1-3.webm';
import video5 from './assets/videos/2-1.webm';
import video6 from './assets/videos/2-2.webm';







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
const Background11 = {

  imageUrl: bg11,
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

const Screenshot4 = {

  imageUrl: screenshot4,
  name: 'screenshot4',
  id: "screenshot4"

};

const Screenshot5 = {

  imageUrl: screenshot5,
  name: 'screenshot5',
  id: "screenshot5"

};
const Screenshot6 = {

  imageUrl: screenshot6,
  name: 'screenshot6',
  id: "screenshot6"

};
const Screenshot7 = {

  imageUrl: screenshot7,
  name: 'screenshot7',
  id: "screenshot7"

};
const Screenshot8 = {

  imageUrl: screenshot8,
  name: 'screenshot8',
  id: "screenshot8"

};
const Screenshot9 = {

  imageUrl: screenshot9,
  name: 'screenshot9',
  id: "screenshot9"

};

const Screenshot10 = {

  imageUrl: screenshot10,
  name: 'screenshot10',
  id: "screenshot10"

};
const Screenshot11 = {

  imageUrl: screenshot11,
  name: 'screenshot11',
  id: "screenshot11"

};
const Screenshot12 = {

  imageUrl: screenshot12,
  name: 'screenshot12',
  id: "screenshot12"

};
const Screenshot13 = {

  imageUrl: screenshot13,
  name: 'screenshot13',
  id: "screenshot13"

};
const Screenshot14 = {

  imageUrl: screenshot14,
  name: 'screenshot14',
  id: "screenshot14"

};
const Screenshot15 = {

  imageUrl: screenshot15,
  name: 'screenshot15',
  id: "screenshot15"

};
const Screenshot16 = {

  imageUrl: screenshot16,
  name: 'screenshot16',
  id: "screenshot16"

};
const Screenshot17 = {

  imageUrl: screenshot17,
  name: 'screenshot17',
  id: "screenshot17"

};
const Screenshot18 = {

  imageUrl: screenshot18,
  name: 'screenshot18',
  id: "screenshot18"

};
const Screenshot19 = {

  imageUrl: screenshot19,
  name: 'screenshot19',
  id: "screenshot19"

};
const Screenshot20 = {

  imageUrl: screenshot20,
  name: 'screenshot20',
  id: "screenshot20"

};
const Screenshot21 = {

  imageUrl: screenshot21,
  name: 'screenshot21',
  id: "screenshot21"

};
const Screenshot22 = {

  imageUrl: screenshot22,
  name: 'screenshot22',
  id: "screenshot22"

};
const Screenshot23 = {

  imageUrl: screenshot23,
  name: 'screenshot23',
  id: "screenshot23"

};
const Screenshot24 = {

  imageUrl: screenshot24,
  name: 'screenshot24',
  id: "screenshot24"

};

const Screenshot25 = {

  imageUrl: screenshot25,
  name: 'screenshot25',
  id: "screenshot25"

};
const Screenshot26 = {

  imageUrl: screenshot26,
  name: 'screenshot26',
  id: "screenshot26"

};
const Screenshot27 = {

  imageUrl: screenshot27,
  name: 'screenshot27',
  id: "screenshot27"

};
const Screenshot28 = {

  imageUrl: screenshot28,
  name: 'screenshot28',
  id: "screenshot28"

};
const Screenshot29 = {

  imageUrl: screenshot29,
  name: 'screenshot29',
  id: "screenshot29"

};
const Screenshot30 = {

  imageUrl: screenshot30,
  name: 'screenshot30',
  id: "screenshot30"

};
const Screenshot31 = {

  imageUrl: screenshot31,
  name: 'screenshot31',
  id: "screenshot31"

};
const Screenshot32 = {

  imageUrl: screenshot32,
  name: 'screenshot32',
  id: "screenshot32"

};
const Screenshot33 = {

  imageUrl: screenshot33,
  name: 'screenshot33',
  id: "screenshot33"

};
const Screenshot34 = {

  imageUrl: screenshot34,
  name: 'screenshot34',
  id: "screenshot34"

};
const Screenshot35 = {

  imageUrl: screenshot35,
  name: 'screenshot35',
  id: "screenshot35"

};
const Screenshot36 = {

  imageUrl: screenshot36,
  name: 'screenshot36',
  id: "screenshot36"

};
const Screenshot37 = {

  imageUrl: screenshot37,
  name: 'screenshot37',
  id: "screenshot37"

};
const Screenshot38 = {

  imageUrl: screenshot38,
  name: 'screenshot38',
  id: "screenshot38"

};
const Screenshot39 = {

  imageUrl: screenshot39,
  name: 'screenshot39',
  id: "screenshot39"

};

const Screenshot40 = {

  imageUrl: screenshot40,
  name: 'screenshot40',
  id: "screenshot40"

};

const Screenshot41 = {

  imageUrl: screenshot41,
  name: 'screenshot41',
  id: "screenshot41"

};
const Screenshot42 = {

  imageUrl: screenshot42,
  name: 'screenshot42',
  id: "screenshot42"

};
const Screenshot43 = {

  imageUrl: screenshot43,
  name: 'screenshot43',
  id: "screenshot43"

};
const Screenshot44 = {

  imageUrl: screenshot44,
  name: 'screenshot44',
  id: "screenshot44"

};
const Screenshot45 = {

  imageUrl: screenshot45,
  name: 'screenshot45',
  id: "screenshot45"

};
const Screenshot46 = {

  imageUrl: screenshot46,
  name: 'screenshot46',
  id: "screenshot46"

};





function Video(props) {
  return (
    <div className="draggable" id={props.video.id}>
      <video className="videos" width={props.video.width} height={props.video.height} autoPlay muted playsInline loop>
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
  id: "video2"
}

const Video3 = {
  url: video3,
  id: "video3"
}

const Video4 = {
  url: video4,
  id: "video4"
}

const Video5 = {
  url: video5,
  id: "video5"
}

const Video6 = {
  url: video6,
  id: "video6"
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
      <Background bg={Background11} />

      <Screenshot image={Screenshot1} />
      <Screenshot image={Screenshot2} />
      <Screenshot image={Screenshot3} />
      <Screenshot image={Screenshot4} />
      <Screenshot image={Screenshot5} />
      <Screenshot image={Screenshot6} />
      <Screenshot image={Screenshot7} />
      <Screenshot image={Screenshot8} />
      <Screenshot image={Screenshot9} />
      <Screenshot image={Screenshot10} />
      <Screenshot image={Screenshot11} />
      <Screenshot image={Screenshot12} />
      <Screenshot image={Screenshot13} />
      <Screenshot image={Screenshot14} />
      <Screenshot image={Screenshot15} />
      <Screenshot image={Screenshot16} />
      <Screenshot image={Screenshot17} />
      <Screenshot image={Screenshot18} />
      <Screenshot image={Screenshot19} />
      <Screenshot image={Screenshot20} />
      <Screenshot image={Screenshot21} />
      <Screenshot image={Screenshot22} />
      <Screenshot image={Screenshot23} />
      <Screenshot image={Screenshot24} />
      <Screenshot image={Screenshot25} />
      <Screenshot image={Screenshot26} />
      <Screenshot image={Screenshot27} />
      <Screenshot image={Screenshot28} />
      <Screenshot image={Screenshot29} />
      <Screenshot image={Screenshot30} />
      <Screenshot image={Screenshot31} />
      <Screenshot image={Screenshot32} />
      <Screenshot image={Screenshot33} />
      <Screenshot image={Screenshot34} />
      <Screenshot image={Screenshot35} />
      <Screenshot image={Screenshot36} />
      <Screenshot image={Screenshot37} />
      <Screenshot image={Screenshot38} />
      <Screenshot image={Screenshot39} />
      <Screenshot image={Screenshot40} />
      <Screenshot image={Screenshot41} />
      <Screenshot image={Screenshot42} />
      <Screenshot image={Screenshot43} />
      <Screenshot image={Screenshot44} />
      <Screenshot image={Screenshot45} />
      <Screenshot image={Screenshot46} />
      


      <Video  video={Video1}/>
      <Video  video={Video2}/>
      <Video  video={Video3}/>
      <Video  video={Video4}/>
      <Video  video={Video5}/>
      <Video  video={Video6}/>

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
