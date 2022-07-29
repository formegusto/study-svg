import styled from "styled-components";

// g 태그로 감싸진 도형들은 g 태그에 스타일 적용 시, 같이 적용된다는 내용
function GroupingComponent() {
  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg">
        <g className="group-1">
          {/* 사각형 */}
          <rect x="10" y="10" width="200" height="100"></rect>
          {/* 원 */}
          <circle cx="265" cy="60" r="50"></circle>
        </g>
        {/* 둥그런 사각형 */}
        <rect x="10" y="130" rx="10" ry="10" width="100" height="100"></rect>
        {/* 타원 */}
        <ellipse
          cx="225"
          cy="180"
          rx="100"
          ry="50"
          fill="red"
          stroke="green"
          strokeWidth="20"
        ></ellipse>
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  svg {
    width: 600px;
    height: 400px;
    background-color: #ddd;

    .group-1 {
      fill: orange;
    }
  }
`;

export default GroupingComponent;
