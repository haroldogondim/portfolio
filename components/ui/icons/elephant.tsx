interface IArrowDown {
  width: number;
  height: number;
}

const ArrowDown = ({ width, height }: IArrowDown) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="10" y1="30" x2="50" y2="70" stroke="white" strokeWidth="5">
        <animate
          attributeName="y1"
          from="30"
          to="35"
          dur="0.5s"
          repeatCount="indefinite"
          direction="alternate"
        />
        <animate
          attributeName="y2"
          from="70"
          to="75"
          dur="0.5s"
          repeatCount="indefinite"
          direction="alternate"
        />
      </line>
      <line x1="50" y1="70" x2="90" y2="30" stroke="white" strokeWidth="5">
        <animate
          attributeName="y1"
          from="70"
          to="75"
          dur="0.5s"
          repeatCount="indefinite"
          direction="alternate"
        />
        <animate
          attributeName="y2"
          from="30"
          to="35"
          dur="0.5s"
          repeatCount="indefinite"
          direction="alternate"
        />
      </line>
      <line x1="10" y1="50" x2="50" y2="90" stroke="white" strokeWidth="5">
        <animate
          attributeName="y1"
          from="50"
          to="55"
          dur="0.5s"
          repeatCount="indefinite"
          direction="alternate"
        />
        <animate
          attributeName="y2"
          from="90"
          to="95"
          dur="0.5s"
          repeatCount="indefinite"
          direction="alternate"
        />
      </line>
      <line x1="50" y1="90" x2="90" y2="50" stroke="white" strokeWidth="5">
        <animate
          attributeName="y1"
          from="90"
          to="95"
          dur="0.5s"
          repeatCount="indefinite"
          direction="alternate"
        />
        <animate
          attributeName="y2"
          from="50"
          to="55"
          dur="0.5s"
          repeatCount="indefinite"
          direction="alternate"
        />
      </line>
    </svg>
  );
};

export default ArrowDown;
