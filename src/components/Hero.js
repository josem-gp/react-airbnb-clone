import photoGrid from "../images/photo-grid.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <img className="hero-img" src={photoGrid} />
      </div>
      <h1>Online Experiences</h1>
      <p width="500px">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home
      </p>
    </div>
  );
}

export default Hero;
