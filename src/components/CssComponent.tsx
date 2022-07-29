import styled, { keyframes } from "styled-components";

function CssComponent() {
  return (
    <Wrapper>
      <svg
        className="face"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 571 625.5"
      >
        <circle
          cx="286.5"
          cy="354.5"
          r="251"
          stroke-width="40"
          fill="none"
          stroke="#000"
          stroke-miterlimit="10"
        />
        <circle className="face__eye" cx="175" cy="380.5" r="42.5" />
        <circle className="face__eye" cx="397" cy="380.5" r="42.5" />
        <path
          d="M422 476.16a181.3 181.3 0 0 1-135.48 60.59H286a181.3 181.3 0 0 1-135.48-60.59"
          stroke-width="30"
          fill="none"
          stroke="#000"
          stroke-miterlimit="10"
        />
        <ellipse
          className="face__hair"
          cx="168.5"
          cy="210.5"
          rx="168.5"
          ry="121.5"
        />
        <ellipse
          className="face__hair"
          cx="428.5"
          cy="198.5"
          rx="142.5"
          ry="123.5"
        />
        <ellipse
          className="face__hair"
          cx="245.5"
          cy="103"
          rx="151.5"
          ry="103"
        />
      </svg>
    </Wrapper>
  );
}

const BlinkEyes = keyframes`
    0% {
        transform: scale(0.9);
    } 100% {
        transform: scale(1.1);
    }
`;

const Wrapper = styled.div`
  height: 100vh;
  svg {
    // 맙소사;; absolute margin auto도 중앙 보내기 방법이었다니;;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 200px;

    & > .face__hair {
      fill: brown;
    }

    & > .face__hair:nth-of-type(1) {
      fill: blue;
    }

    & > .face__eye {
      animation: ${BlinkEyes} 1s linear infinite alternate;
      /* transform-origin: center center; */
    }

    & > .face__eye:nth-of-type(2) {
      transform-origin: 175px 380.5px;
    }

    & > .face__eye:nth-of-type(3) {
      transform-origin: 397px 380.5px;
    }
  }
`;

export default CssComponent;
