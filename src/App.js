//import React from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';
import './App-mobile.css';

import './components/Audio.css';
import './components/Video.css';
import './components/Screenshot.css';
import './components/Background.css';

import ScreenshotBuilder from './components/Screenshot'
import BackgroundBuilder from './components/Background'
import VideoBuilder from './components/Video'
import AudioBuilder from './components/Audio'

import loading from './assets/img/Loading.gif'


//draggeable code for desktop https://codepen.io/mostafa2020/pen/NWWVbLR
//document.addEventListener('DOMContentLoaded', function(event) {
function draggeableItem() {
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

}

//end of the draggeables images


const Loading = () => {
  return(
    <div id="loading">
      <img
            className="loading-img"
            src={loading}
            alt={loading}
        />
      </div>
  )
}

class MyPage extends React.Component {

  //necesito ejecutar la funcion para draggear dsp de que todo se haya cargado en el dom
  componentDidMount() {
    draggeableItem();
  }

  componentWillUnmount() {
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
  
          
          <BackgroundBuilder/>
  
          <ScreenshotBuilder/>
  
          <VideoBuilder/>
  
          <AudioBuilder/>
  
  
        {/* this is a comment in jsx */}
        </header>
      </div>
    );
  }
}
/*const MyPage = () => {    

  return (
    <div className="App">
      <header className="App-header">

        
        <BackgroundBuilder/>

        <ScreenshotBuilder/>

        <VideoBuilder/>

        <AudioBuilder/>


      {/* this is a comment in jsx */
      /*</header>
    </div>
  );
  
}*/

function App() {
  
  //hook para setear a false si ya cargo el evento load
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {window.addEventListener('load', setIsLoading(false))}, [])  
  
  return isLoading ? (<Loading />) : (<MyPage />)
  
}


export default App;
