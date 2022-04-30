import cardPic from "../images/katie-zaferes.png";
import starIcon from "../images/star.png";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={cardPic} />
      <div className="card-rating">
        <img className="card-star" src={starIcon} />
        <p>5.0</p>
        <p className="card-gray-p">(6)</p>
        <div className="dot"></div>
        <p className="card-gray-p">USA</p>
      </div>
      <p>Life lessons from Katie Zaferes</p>
      <p>
        <span>From $136</span> / person
      </p>
    </div>
  );
}

export default Card;
