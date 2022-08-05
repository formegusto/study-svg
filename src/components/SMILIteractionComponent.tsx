import React from "react";
import styled from "styled-components";

function SMILInteractionComponent() {
  const refRect = React.useRef<SVGRectElement>(null);
  const refAni = React.useRef<SVGAnimateElement>(null);
  React.useEffect(() => {
    refRect.current?.addEventListener("click", () => {
      refAni.current?.beginElement();
    });
  }, []);

  return (
    <Wrapper>
      <svg className="svg" viewBox="0 0 1000 1000">
        <rect ref={refRect} x="10" y="10" width="20%" height="20%">
          <animate
            ref={refAni}
            attributeName="x"
            dur="1s"
            to="700"
            repeatCount="1"
            fill="freeze" // forwards
            // begin="1s" // 1초 후에 실행
            begin="indefinite" // 실행이 안됨
          ></animate>
        </rect>
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default SMILInteractionComponent;
