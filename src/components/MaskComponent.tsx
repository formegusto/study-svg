import styled from "styled-components";

function MaskComponent() {
  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg" className="the-svg">
        <defs>
          <mask id="mask-circle">
            <circle cx="250" cy="70" r="40" fill="white"></circle>
          </mask>
        </defs>
        <g mask="url(#mask-circle)">
          <text x="10" y="100">
            Hello SVG! Hello SVG! Hello SVG! Hello SVG!
          </text>
        </g>
        {/* <text x="10" y="100">
          Hello SVG! Hello SVG! Hello SVG! Hello SVG!
        </text> */}
      </svg>
    </Wrapper>
  );
}

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

    & text {
      mask: url(#mask-circle);
      font-size: 5rem;
    }
  }
`;

export default MaskComponent;
