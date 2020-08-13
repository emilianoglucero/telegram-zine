import React from 'react';

import audio1 from '../assets/audios/01-1.mp3';
import audio21 from '../assets/audios/02-21.mp3';
import audio22 from '../assets/audios/03-22.mp3';
import audio23 from '../assets/audios/04-23.mp3';
import audio31 from '../assets/audios/05-31.mp3';
import audio32 from '../assets/audios/06-32.mp3';
import audio33 from '../assets/audios/07-33.mp3';
import audio40 from '../assets/audios/08-40.mp3';
import audio50 from '../assets/audios/09-50.mp3';
import audio60 from '../assets/audios/10-60.mp3';
import audio70 from '../assets/audios/11-70.mp3';
import audio80 from '../assets/audios/12-80.mp3';
import audio90 from '../assets/audios/12-90.mp3';
import audio100 from '../assets/audios/13-100.mp3';
import audio110 from '../assets/audios/14-110.mp3';
import audio120 from '../assets/audios/15-120.mp3';
import audio130 from '../assets/audios/16-130.mp3';
import audio140 from '../assets/audios/17-140.mp3';
import audio150 from '../assets/audios/18-150.mp3';
import audio160 from '../assets/audios/19-160.mp3';
import audio161 from '../assets/audios/19-161.mp3';
import audio170 from '../assets/audios/20-170.mp3';
import audio180 from '../assets/audios/21-180.mp3';
import audio190 from '../assets/audios/22-190.mp3';
import audio191 from '../assets/audios/23-191.mp3';
import audio192 from '../assets/audios/24-192.mp3';
import audio193 from '../assets/audios/25-193.mp3';
import audio194 from '../assets/audios/26-194.mp3';
import audio195 from '../assets/audios/27-195.mp3';
import audio196 from '../assets/audios/28-196.mp3';
import audio197 from '../assets/audios/29-197.mp3';
import audio200 from '../assets/audios/30-200.mp3';
import audio201 from '../assets/audios/31-201.mp3';
import audio202 from '../assets/audios/32-202.mp3';
import audio210 from '../assets/audios/33-210.mp3';
import audio211 from '../assets/audios/34-211.mp3';
import audio212 from '../assets/audios/35-212.mp3';
import audio213 from '../assets/audios/36-213.mp3';
import audio214 from '../assets/audios/37-214.mp3';
import audio220 from '../assets/audios/38-220.mp3';


function Audio(props) {
    return (
      <audio className="audios" id={props.audio.id} controls>
        <source src={props.audio.ogg} type="audio/mp3"/>
      </audio>
    );
}

const AudioBuilder = () => {
    return(
        <div className="audio-builder">
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
        </div>
    )
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
  
  export default AudioBuilder;