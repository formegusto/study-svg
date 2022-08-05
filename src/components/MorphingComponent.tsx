import styled from "styled-components";

function MorphingComponent() {
  return (
    <Wrapper>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 684 684"
      >
        <defs>
          <style>
            {`.cls-1 {
                fill: #fff000;
              }`}
          </style>
        </defs>
        <title>Untitled-19</title>
        <path
          className="cls-1"
          d="M282,192s-96-20-131,56c0,0-39,105,38,157,0,0,22,51,17,88,0,0-20,117,91,142,0,0,273,77,243-181,0,0-10-93,49-137,0,0,134-101-34-193,0,0-112-62-211,43C344,167,320,205,282,192Z"
          transform="translate(-42 -42)"
        >
          {/* 
                M 이라는 포인트들이 있는데, 이 점 개수가 유지된 상태에서 애니메이션이 동작하기 때문에,
                일러스트로 수정해줄 때, 포인트를 유지시킨 상태에서 진행하도록 한다.

                이때, attributeName에는 d를 변화시킬 것이므로, d를 변경해준다.
                
                근데 형태가 변하면 크기가 변화해서 나가질 거임, 그래서 박스를 친 상태에서 일러스트를 만져준다.
            */}
          <animate
            attributeName="d"
            dur="3s"
            to="M282,142s-96,30-131,106c0,0-109,105-32,157,0,0,22,51,17,88,0,0,50,117,161,142,0,0,373,77,343-181,0,0-10-93,49-137,0,0,34-101-134-193,0,0-112-112-211-7C344,117,320,155,282,142Z"
          ></animate>
        </path>
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default MorphingComponent;
