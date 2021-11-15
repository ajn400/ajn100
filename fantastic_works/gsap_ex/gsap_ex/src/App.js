import React from "react";
import FadeInAnimation from "./FadeInAnimation";

export default function App() {
  return (
    <div>
      {/* <FadeInAnimation wrapperElement="h1" direction="down">
        Hello CodeSandbox
      </FadeInAnimation>
      <FadeInAnimation wrapperElement="h2" direction="right" delay={1}>
        Start editing to see some magic happen!
      </FadeInAnimation>
      <FadeInAnimation
        style={{
          width: 200,
          color: "white",
          height: 200,
          backgroundColor: "purple",
        }}
        direction="up"
      >

        <p>Hello</p>
      </FadeInAnimation> */}
      <FadeInAnimation direction="left" style={{
        fontWeight:"bold"
      }} delay="1">
        Hello darkness my old friend
      </FadeInAnimation>
      <FadeInAnimation direction="left" style={{
        fontWeight:"bold"
      }} delay="2">
        Hello darkness my old friend
      </FadeInAnimation>
      <FadeInAnimation direction="left" style={{
        fontWeight:"bold"
      }} delay="3">
        Hello darkness my old friend
      </FadeInAnimation>
      <FadeInAnimation direction="left" style={{
        fontWeight:"bold"
      }} delay="4">
        Hello darkness my old friend
      </FadeInAnimation>
    </div>
  );
}
