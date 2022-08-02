import styled from "styled-components";
import face from "../assets/face.svg";

function AnimationedPatternComponent() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url(${face});
  background-size: 100px;
`;

export default AnimationedPatternComponent;
