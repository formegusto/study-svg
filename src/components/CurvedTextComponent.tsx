import styled from "styled-components";

function CurvedTextComponent() {
  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg">
        {/* 나중에 참조할 데이터를 넣어놓는 태그, path나 도형을 넣을 수 있따. style 태그 까지도! */}
        <defs>
          <path
            id="text-curve"
            d="M 50 400 C 50 400, 150 500, 250 400, C 250 400, 350 300, 450 400 "
            stroke="black"
            strokeWidth="2.5"
            fill="none"
          ></path>
        </defs>

        <text x="20" y="50">
          <textPath href="#text-curve">Hello, SVG! iamformegusto.</textPath>
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

export default CurvedTextComponent;
