import React from "react";
import styled, { keyframes } from "styled-components";

function MagnifyComponent() {
  const refMagnifier = React.useRef<SVGPathElement>(null);
  const refMask = React.useRef<SVGCircleElement>(null);

  React.useEffect(() => {
    // window.addEventListener("DOMContentLoaded") => Tag 구조들의 완성

    window.addEventListener("mousemove", (e) => {
      if (refMagnifier.current && refMask.current) {
        refMagnifier.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
        refMask.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      }
    });
  }, []);

  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg" className="the-svg">
        <defs>
          <pattern id="pattern-bg" x="0" y="0" width="0.1" height="0.1">
            <path
              d="M138.61,133a29.89,29.89,0,1,1,21.14-8.75A29.72,29.72,0,0,1,138.61,133Zm0-55.38a25.49,25.49,0,1,0,18,7.46A25.32,25.32,0,0,0,138.61,77.63Z"
              transform="translate(-107 -64)"
            />
            <g>
              <circle cx="19.31" cy="41.98" r="4.69" />
              <circle className="left-eye" cx="43.8" cy="41.98" r="4.69" />
            </g>
            <path
              d="M138.61,124.88h-.05a21.76,21.76,0,0,1-16.19-7.24l2.47-2.21a18.44,18.44,0,0,0,13.72,6.14h.05a18.44,18.44,0,0,0,13.72-6.14l2.46,2.21A21.73,21.73,0,0,1,138.61,124.88Z"
              transform="translate(-107 -64)"
            />
            <path
              d="M154.28,72.27a17.56,17.56,0,0,0-3.94.44c-1.76-5-8.37-8.71-16.25-8.71-9.15,0-16.58,5-16.72,11.2C111.23,77.38,107,82,107,87.23c0,7.4,8.32,13.4,18.59,13.4,6.84,0,12.82-2.66,16-6.63a16.61,16.61,0,0,0,12.65,5.53C163,99.53,170,93.43,170,85.9S163,72.27,154.28,72.27Z"
              transform="translate(-107 -64)"
            />
          </pattern>
          <mask id="mask-glass">
            <circle ref={refMask} cx="80.51" cy="80.51" r="60" fill="#fff" />
          </mask>
        </defs>
        {/* mask 는 흰색에 가까울수록 투명, 검은색에 가까울수록 어두워짐 */}

        <path
          ref={refMagnifier}
          d="M150.81 41.26a80.5 80.5 0 1 0-41.94 114.6l36.28 64.95a12 12 0 1 0 20.95-11.7l-36.29-64.95a80.51 80.51 0 0 0 21-102.9zm-41 91.63a60 60 0 1 1 23.12-81.64 60 60 0 0 1-23.12 81.64z"
          fill="#ce0000"
        />
        <g mask="url(#mask-glass)">
          <rect className="bg" x="0" y="0" width="100%" height="100%"></rect>
        </g>
      </svg>
    </Wrapper>
  );
}

const AniEye = keyframes`
  to {
    transform: scaleY(0.2);
  } from {
    transform: scaleY(1);
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  & > .the-svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: #ddd;

    & .bg {
      fill: url(#pattern-bg);
    }

    .left-eye {
      animation: ${AniEye} 1s linear alternate infinite;
      transform-origin: 43.8px 41.98px;
    }
  }
`;

export default MagnifyComponent;
