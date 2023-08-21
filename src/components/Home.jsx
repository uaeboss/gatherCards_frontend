import Card from "./Card";
import "./css/Home.css"

const Home = ({ magic }) => {


  console.log(magic)
  return (
    <>
      <div className="cardflow">
      <Card magic={magic} />
      </div>
    </>
  );
};

export default Home;
