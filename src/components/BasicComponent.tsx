import studiomeal from "../assets/studiomeal.svg";

// Inject SVG in HTML
function BasicComponent() {
  // 1. <img> 태그
  return <img src={studiomeal} alt="" />;
  // 2. CSS Background
  //   return <div className="svg" />;
  // 3. SVG 요소를 직접 inline에 삽입
  //   return (
  //     <svg
  //       id="Layer_1"
  //       data-name="Layer 1"
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 571 625.5"
  //     >
  //       <defs>
  //         <style></style>
  //       </defs>
  //       <title>face</title>
  //       <circle className="cls-1" cx="286.5" cy="354.5" r="251" />
  //       <g>
  //         <circle cx="175" cy="380.5" r="42.5" />
  //         <circle cx="397" cy="380.5" r="42.5" />
  //       </g>
  //       <path
  //         className="cls-2"
  //         d="M529,540.16a181.3,181.3,0,0,1-135.48,60.59H393a181.3,181.3,0,0,1-135.48-60.59"
  //         transform="translate(-107 -64)"
  //       />
  //       <ellipse cx="168.5" cy="210.5" rx="168.5" ry="121.5" />
  //       <ellipse cx="428.5" cy="198.5" rx="142.5" ry="123.5" />
  //       <ellipse cx="245.5" cy="103" rx="151.5" ry="103" />
  //     </svg>
  //   );
  // 4. object 태그
  //   return (
  //     <object
  //       data={studiomeal}
  //       type="image/svg+xml"
  //       aria-label="studiomeal"
  //     ></object>
  //   );
}

export default BasicComponent;
