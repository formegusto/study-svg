import styled from "styled-components";

function TextComponent() {
  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg">
        <text x="20" y="50">
          Hello, SVG!
        </text>
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ddd;
  }

  text {
    font-size: 1.5em;
    font-weight: 900;
    /* SVG 는 color가 아닌, SVG 이기 때문에 fill로 이를 지정해준다. */
    fill: blue;
  }
`;

export default TextComponent;
