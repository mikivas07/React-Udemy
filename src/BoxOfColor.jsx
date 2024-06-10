import { useState, useRef } from "react";

export const BoxOfColor = () => {
  const colors = ["blue", "green", "orange"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const colorBoxRef = useRef(null);

  const cambiaColor = () => {
    if (colorBoxRef.current) {
      colorBoxRef.current.style.backgroundColor = colors[currentIndex];
      setCurrentIndex((currentIndex + 1) % colors.length);
    }
  };

  return (
    <>
      <div
        ref={colorBoxRef}
        style={{
          width: 100,
          height: 100,
          backgroundColor: colors[currentIndex],
        }}
      ></div>
      <button onClick={cambiaColor}>Change Color</button>
    </>
  );
};
