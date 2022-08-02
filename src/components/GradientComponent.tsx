import styled from "styled-components";
import face from "../assets/face_hair.svg";

function GradientComponent() {
  return (
    <Wrapper>
      <object
        className="svg-obj"
        data={face}
        type="image/svg+xml"
        aria-label="face-hair"
      ></object>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  & > .svg-obj {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;

    width: 200px;
  }
`;

export default GradientComponent;
