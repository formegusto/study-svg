import styled from "styled-components";

function StraightComponent() {
  return (
    <Wrapper>
      <svg className="line">
        {/* line - 일반 직선 */}
        {/* x1: x축의 출발지점, x2: x축의 끝 지점 */}
        {/* y1: y축의 출발지점, y2: y축의 끝 지점 */}
        <line x1="10" x2="400" y1="30" y2="300" stroke="blue"></line>

        {/* Polyline - 직선으로 점들을 잇는 개념 */}
        {/* 별 그려야징 */}
        <polyline points="0 0, 200 100, 150 300" stroke="red"></polyline>
        <polyline
          points="250 180, 275 180, 300 150, 325 180, 350, 180, 
                325 220, 340 250, 300 240, 260 250, 275 220, 250,180"
          fill="none"
          stroke="blue"
        ></polyline>

        {/* Polygon - polyline과 같이 점을 찍는 개념은 같지만, 선을 잇는 방법이 다르다. 마지막에 끝점과 시작점에 자동으로 선을 그어준다. */}
        <polygon points="0 0, 200 100, 150 300" stroke="red"></polygon>
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  svg {
    width: 600px;
    height: 400px;
    background-color: #ddd;
  }

  line {
    /* stroke-width: 3px; */
  }
`;

export default StraightComponent;
