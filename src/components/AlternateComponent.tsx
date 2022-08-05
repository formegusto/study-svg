import styled from "styled-components";

function AlternateComponent() {
  return (
    <Wrapper>
      <svg className="svg" viewBox="0 0 1000 1000">
        <rect x="10" y="10" width="20%" height="20%">
          <animate
            attributeName="x"
            dur="1s"
            // to="700"
            values="0; 700; 0"
            keyTimes="0; 0.5; 1"
            // repeatCount="3"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default AlternateComponent;
