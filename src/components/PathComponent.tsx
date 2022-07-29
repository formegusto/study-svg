import styled from "styled-components";

function PathComponent() {
  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg">
        {/* 자유 도형 그리기 - svg에서 가장 막강한 기능 */}
        {/* 일러스트에서 펜툴로 그린 것이 나온다. */}
        <path d="M 300 200 L 500 100 H 50 V 300 Z"></path>
        {/* M - 위치지정, 포인트 지정 ex) M 300 200, x좌표 300, y좌표 200 */}
        {/* L - 직선 긋기, M으로 포인트를 잡아줬으니, 끝 지점만 지정해주면 된다. */}
        {/* H - 가로직선 긋기, 가로 지정이니까 X 위치만 잡아주면 된다. */}
        {/* V - 세로직선 긋기, 세로 지정이니까 Y 위치만 잡아주면 된다*/}
        {/* 선을 그은 후에는 포인트가 변경된다. */}
        {/* Z - 현재 포인트(끝점)와 시작 포인트 지점을 연결한다. (마무리용) */}

        {/* 곡선 */}
        {/* 일러스트에서 베젤곡선을 어떤식으로 그리는 지 상상 
        시작점과 끝점을 잡아준 이후에 두 점의 각도를 지정하는 작업을 진행함 
        즉, 시작점, 끝점, Radius Handler 3개의 구조로 진행된다. 
        path 태그 상에서는 시작점, Radius Handler, 끝점 순으로 기입해준다. */}
        <path d="M 100 150 C 100 150, 300 50, 500 250"></path>
        {/* 베젤 곡선은 여러 사용법이 있으나, 보통 일러스트로 그려진 것을 가져오기 때문에 필요없으시다고 하심! */}
        {/* Radius Handler 300, 500의 개념은 X값이 높아질수록 곡선의 모양이 시작점, 끝점으로 가파르게 모양이 이루어지고,
        Y의 값이 높아질수록 위쪽으로 뻗은 곡선의 모양으로 가까워짐 */}
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
      stroke: blue;
      stroke-width: 5;
      fill: none;
    }
  }
`;

export default PathComponent;
