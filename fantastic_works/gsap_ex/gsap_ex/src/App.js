import React,{useEffect} from "react";
import FadeInAnimation from "./FadeInAnimation";
import {Routes} from 'react-router'
import './App.css';

const words = "Hello darkness my old friend," +
    "i've come to talk with you again," +
    "because a version softly creeping," +
    "left it's seed while i was sleeping,And the vision that was planted in my brain," +
    "Still remains within," +
    "the sound of silence."
let str = [];
words.split(',').map((item, index) => {
  str.push(<FadeInAnimation direction="left" style={{
    fontWeight: "bold",
    fontSize: "20px"
  }} delay={index*1.5} key={index}>{item}</FadeInAnimation>)
  return str
})

export default function App() {
  useEffect(()=>{
    
  });

  const jumpToApp = ()=>{
    console.log(Routes)
  }


  return (
      <div className='App' onClick={jumpToApp}>
        {str}
      </div>
  );
}
