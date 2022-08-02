import styled from "styled-components";

function PatternComponent() {
  return (
    <Wrapper>
      <svg viewBox="0 0 1000 1000">
        <defs>
          <pattern id="bg-pattern" x="0" y="0" width="0.1" height="0.1">
            <circle cx="50" cy="50" r="50" className="pattern-circle"></circle>
          </pattern>
        </defs>
        <rect
          className="bg-rect"
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#bg-pattern)"
        ></rect>
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  & > svg {
    width: 100%;
    height: 100%;
    background: #ddd;

    & .pattern-circle {
      fill: #fff000;
    }

    & > .bg-rect {
      /* fill: url("#bg-pattern"); */
    }
  }
`;

export default PatternComponent;
