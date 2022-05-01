import starIcon from "../images/star.png";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        className="card-image"
        src={require(`../images/${props.coverImg}`)}
      />
      <div className="card-rating">
        <img className="card-star" src={starIcon} />
        <p>{props.rating}</p>
        <p className="card-gray-p">({props.reviewCount})</p>
        <div className="dot"></div>
        <p className="card-gray-p">{props.location}</p>
      </div>
      <p>{props.title}</p>
      <p>
        <span>From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
