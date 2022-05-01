import starIcon from "../images/star.png";

function Card(props) {
  return (
    <div className="card">
      <img
        className="card-image"
        src={require(`../images/${props.coverImg}`)}
      />
      <div className="card-rating">
        <img className="card-star" src={starIcon} />
        <p>{props.rating}</p>
        <p className="card-gray-p">({props.reviewCount})</p>
        <div className="dot"></div>
        <p className="card-gray-p">USA</p>
      </div>
      <p>{props.title}</p>
      <p>
        <span>From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
