import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const dataMap = data.map((data) => (
    <Card
      key={data.id}
      title={data.title}
      price={data.price}
      coverImg={data.coverImg}
      rating={data.stats.rating}
      reviewCount={data.stats.reviewCount}
      location={data.location}
      openSpots={data.openSpots}
    />
  ));

  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <section className="cards-list">{dataMap}</section>
    </div>
  );
}

export default App;
