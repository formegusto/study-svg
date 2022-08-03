import React from "react";
import styled, { keyframes } from "styled-components";

function AniStrokeComponent() {
  const refPath = React.useRef<SVGPathElement>(null);

  React.useEffect(() => {
    console.log(refPath.current?.getTotalLength());
  }, []);
  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
        {/* <circle cx="400" cy="250" r="100"></circle> */}
        <path
          ref={refPath}
          d="M 50 400 C 50 400, 300 500, 400 400
            C 400 400, 600 170, 700 300"
        ></path>
      </svg>
    </Wrapper>
  );
}

const dashAni = keyframes`
    from {
        stroke-dashoffset: 700;
    } to {
        stroke-dashoffset: 0;
         // dash array 위치
    }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  circle {
    stroke: black;
    stroke-width: 5;
    stroke-dasharray: 350;
    /* stroke-dashoffset: 10; */
    fill: transparent;

    animation: ${dashAni} 1s linear infinite alternate;
  }

  path {
    stroke: black;
    stroke-width: 5;
    stroke-dasharray: 727;
    fill: transparent;
    animation: ${dashAni} 1s linear infinite alternate;
  }
`;

export default AniStrokeComponent;
