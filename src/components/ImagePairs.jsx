import angle from "../images/SAMPLE_angle.jpg";
import answer from "../images/SAMPLE_answer.jpg";
import angle2 from "../images/SAMPLE2_angle.jpg";
import answer2 from "../images/SAMPLE2_answer.jpg";
import ImageRender from "./ImageRender";

const ImagePairs = () => {
  const pair = [angle, answer, angle2, answer2];

  return <ImageRender answer={answer2} angle={angle2} />;
};

export default ImagePairs;
