import React from "react";
import skullEmoji from "../images/where_u_clicked.png";
import Crosshair from "./Crosshair";
import { useState, useMemo, useCallback } from "react";

export default function ImageRender({ answer, angle, onComplete }) {
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
        pageX,
        pageY,
        //    ...rest
      } = e;
      setCrosshairLocation((prev) => {
        if (prev) {
          return null;
        }
        return {
          x: pageX,
          y: pageY,
        };
      });
    },
    [setCrosshairLocation]
  );

  return (
    <div className="App">
      <Crosshair location={crosshairLocation} height={10} image={skullEmoji} />
      <img src={image} onClick={handleClick} />
    </div>
  );
}
