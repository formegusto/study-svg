import styled from "styled-components";

function SizeComponent() {
  return (
    <Wrapper>
      {/* <svg width="500" height="500">
          <rect x="0" y="0" width="100" height="100"></rect>
        </svg> */}
      {/* viewBox 소개 */}
      {/* <svg viewBox="0 0 500 500">
        <rect x="0" y="0" width="100" height="100"></rect>
      </svg>
      <svg viewBox="0 0 1000 1000">
        <rect x="0" y="0" width="100" height="100"></rect>
      </svg>
      <svg viewBox="0 0 100 100">
        <rect x="0" y="0" width="100" height="100"></rect>
      </svg> */}

      <svg viewBox="0 0 500 500">
        <rect x="0" y="0" width="100" height="100"></rect>
      </svg>
    </Wrapper>
  );
  //   return (
  //     <Wrapper>
  //       <svg
  //         id="Layer_1"
  //         data-name="Layer 1"
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 571 625.5"
  //       >
  //         <defs>
  //           <style></style>
  //         </defs>
  //         <title>face</title>
  //         <circle className="cls-1" cx="286.5" cy="354.5" r="251" />
  //         <g>
  //           <circle cx="175" cy="380.5" r="42.5" />
  //           <circle cx="397" cy="380.5" r="42.5" />
  //         </g>
  //         <path
  //           className="cls-2"
  //           d="M529,540.16a181.3,181.3,0,0,1-135.48,60.59H393a181.3,181.3,0,0,1-135.48-60.59"
  //           transform="translate(-107 -64)"
  //         />
  //         <ellipse cx="168.5" cy="210.5" rx="168.5" ry="121.5" />
  //         <ellipse cx="428.5" cy="198.5" rx="142.5" ry="123.5" />
  //         <ellipse cx="245.5" cy="103" rx="151.5" ry="103" />
  //       </svg>
  //     </Wrapper>
  //   );
}

const Wrapper = styled.div`
  body {
    margin: 0;
  }
  /* svg {
    background: #ddd;
    width: 500px;
    height: 500px;
  } */
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default SizeComponent;
