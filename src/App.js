import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const dataMap = data.map((data) => (
    <Card
      title={data.title}
      price={data.price}
      coverImg={data.coverImg}
      rating={data.stats.rating}
      reviewCount={data.stats.reviewCount}
    />
  ));

  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      {dataMap}
    </div>
  );
}

export default App;
