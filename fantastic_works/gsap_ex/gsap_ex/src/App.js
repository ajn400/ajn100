import React from "react";
import FadeInAnimation from "./FadeInAnimation";
import './App.css';

const words="Hello darkness my old friend,i've come to talk with you again,because a version softly creeping,left it's seed while i was sleeping"
let str=[];
words.split(',').map((item,index)=>{
str.push(<FadeInAnimation direction="left" style={{
  fontWeight:"bold",
  fontSize:"20px"
}} delay={index} key={index}>{item}</FadeInAnimation>)
return str
})
export default function App() {
  return (
    <div className='App'>
      {str}
    </div>
  );
}
