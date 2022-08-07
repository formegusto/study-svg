import React from "react";
import styled, { keyframes } from "styled-components";

function ReactMonComponent() {
  const refEffect = React.useRef<SVGEllipseElement>(null);
  const refSvg = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    if (refEffect.current) {
      console.log(refEffect.current.getTotalLength());

      // 712.1347045898438;
    }
  }, []);

  React.useEffect(() => {
    const targetPos = { x: 0, y: 0 };
    const easeValue = 0.05;
    const reactMonInfo = {
      x: 0,
      y: 0,
    };

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;

      // console.log(`translate(${clientX - 100}px, ${clientY - 100}px)`);
      // refSvg.current!.style.transform = `translate(${clientX - 100}px, ${
      //   clientY - 100
      // }px)`;

      targetPos.x = clientX - window.innerWidth * 0.5;
      targetPos.y = clientY - window.innerHeight * 0.5;
    });

    const render = () => {
      const dx = targetPos.x - reactMonInfo.x;
      const dy = targetPos.y - reactMonInfo.y;

      reactMonInfo.x = reactMonInfo.x + dx * easeValue;
      reactMonInfo.y = reactMonInfo.y + dy * easeValue;
      refSvg.current!.style.transform = `translate(${reactMonInfo.x}px, ${reactMonInfo.y}px)`;

      requestAnimationFrame(render);
    };

    render();
  }, []);

  return (
    <Wrapper>
      <svg
        ref={refSvg}
        className="react-mon"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 327 291.84"
      >
        <defs>
          <mask id="eye-mask">
            <ellipse cx="163.5" cy="145.92" rx="28" ry="14" fill="#fff">
              <animate
                attributeName="ry"
                dur="2s"
                values="14; 14; 0; 14"
                keyTimes="0; 0.8; 0.9; 1"
                repeatCount="indefinite"
              />
            </ellipse>
          </mask>
        </defs>
        <g className="ells ells-1">
          <ellipse
            className="cls-1 frame"
            cx="163.5"
            cy="145.92"
            rx="156"
            ry="60"
          />
          <ellipse
            className="cls-1 eff eff-1"
            ref={refEffect}
            cx="163.5"
            cy="145.92"
            rx="156"
            ry="60"
          />
        </g>
        <g className="ells ells-2">
          <ellipse
            className="cls-1 frame"
            cx="384"
            cy="384"
            rx="156"
            ry="60"
            transform="matrix(.5 -.87 .87 .5 -361.05 286.47)"
          />
          <ellipse
            className="cls-1 eff eff-2"
            cx="384"
            cy="384"
            rx="156"
            ry="60"
            transform="matrix(.5 -.87 .87 .5 -361.05 286.47)"
          />
        </g>
        <g className="ells ells-3">
          <ellipse
            className="cls-1 frame"
            cx="384"
            cy="384"
            rx="60"
            ry="156"
            transform="rotate(-30 -170.504 676.413)"
          />
          <ellipse
            className="cls-1 eff eff-3"
            cx="384"
            cy="384"
            rx="60"
            ry="156"
            transform="rotate(-30 -170.504 676.413)"
          />
        </g>
        <circle cx="163.5" cy="145.92" r="31" fill="#61dafb" />

        <ellipse cx="163.5" cy="145.92" rx="28" ry="14" fill="#fff">
          <animate
            attributeName="ry"
            dur="2s"
            values="14; 14; 0; 14"
            keyTimes="0; 0.8; 0.9; 1"
            repeatCount="indefinite"
          />
        </ellipse>
        <g mask="url(#eye-mask)">
          <circle cx="163.5" cy="145.92" r="13" fill="#333">
            <animate
              attributeName="cx"
              dur="1.25s"
              values="163.5; 143.5; 183.5; 163.5"
              keyTimes="0; 0.25; 0.75; 1"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </Wrapper>
  );
}

const aniRotate1 = keyframes`
  100% {
    transform: rotate3d(0, 1, 0, 360deg);
  }
`;

const aniRotate2 = keyframes`
  100% {
    transform: rotate3d(2, 1.22, 0, 360deg);
  }
`;

const aniRotate3 = keyframes`
  100% {
    transform: rotate3d(-2, 1.22, 0, 360deg);
  }
`;

const aniSpin = keyframes`
  from {
    stroke-dashoffset: 0;
  } to {
    stroke-dashoffset: 712;
  }
`;

const Wrapper = styled.div`
  .react-mon {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    margin: auto;
    width: 200px;
    height: 200px;
  }

  .cls-1 {
    fill: none;
    stroke: #61dafb;
    stroke-miterlimit: 10;
    stroke-width: 15px;

    &.frame {
      opacity: 0.3;
    }

    &.eff {
      animation: ${aniSpin} 0.75s linear infinite;
      stroke-dasharray: 356.0673522949219;
    }

    &.eff-2 {
      animation-delay: 0.5s;
    }
    &.eff-3 {
      animation-delay: 0.75s;
    }
  }

  .ells {
    transform-origin: 50% 50%;
  }
  .ells-1 {
    animation: ${aniRotate1} 3s infinite linear;
  }
  .ells-2 {
    animation: ${aniRotate2} 3s infinite linear;
  }
  .ells-3 {
    animation: ${aniRotate3} 3s infinite linear;
  }
`;

export default ReactMonComponent;
