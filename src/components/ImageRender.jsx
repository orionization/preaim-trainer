import React from "react";
import angle from "../images/SAMPLE_angle.jpg";
import answer from "../images/SAMPLE_answer.jpg";
import crosshare from "../images/where_u_clicked.png";
import Crosshair from "./Crosshair";
import { useState, useMemo, useCallback } from "react";

export default function ImageRender() {
  const [crosshairLocation, setCrosshairLocation] = useState(null);

  const image = useMemo(() => {
    if (crosshairLocation) {
      return answer;
    }
    return angle;
  }, [crosshairLocation]);

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      const {
        clientX,
        clientY,
        //    ...rest
      } = e;
      setCrosshairLocation((prev) => {
        if (prev) {
          return null;
        }
        return {
          x: clientX,
          y: clientY,
        };
      });
    },
    [setCrosshairLocation]
  );

  return (
    <div className="App">
      <Crosshair location={crosshairLocation} height={10} image={crosshare} />
      <img src={image} onClick={handleClick} />
    </div>
  );
}
