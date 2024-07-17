import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import data from "./data.js";

function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} card={card} />;
  });
  return (
    <>
      <Header />
      <section className="cards-container">{cards}</section>
    </>
  );
}

export default App;