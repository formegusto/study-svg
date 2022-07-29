import styled from "styled-components";

function FigureComponent() {
  return (
    <Wrapper>
      <svg className="shapes">
        {/* 사각형 */}
        <rect x="10" y="10" width="200" height="100"></rect>
        {/* 원 */}
        <circle cx="265" cy="60" r="50"></circle>
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
  & > .shapes {
    width: 600px;
    height: 400px;
    background: #ddd;
  }

  rect {
    fill: orange;
    stroke: blue;
    stroke-width: 10;
  }
`;

export default FigureComponent;
