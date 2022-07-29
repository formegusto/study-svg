import styled from "styled-components";

function StrokeComponent() {
  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg">
        {/* 일러스트 끝 선 처리 */}
        {/* Cap - 끝 선을 Round 형태 혹은 더 나아가는 끝 처리로 변환가능 */}
        {/* Corner - 포인트가 3개 이상 되었을 때, 모서리가 생기는데 이 부분에 Round 효과를 줄 수 있다. */}
        <path d="M 50 200 L 300 100 L 400 200"></path>
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  svg {
    width: 600px;
    height: 400px;
    background-color: #ddd;

    path {
      stroke: tomato;
      stroke-width: 20;
      stroke-linecap: square;
      // butt : Default
      // round : 둥글게 처리
      // square : 사각 처리
      stroke-linejoin: bevel;
      // miter : Default
      // round : 둥글게 처리
      // bevel : 각 진건 아니고,, 약간,, 음,, round가 직선으로 먹힌 형태?
      fill: none;
    }
  }
`;

export default StrokeComponent;
