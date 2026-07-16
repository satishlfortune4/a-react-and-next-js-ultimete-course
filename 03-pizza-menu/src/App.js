import React from "react";
import reactDOM from "react-dom/client";

const pizzaData = [
  {
    name: "Paneer Tikka Pizza",
    ingredients: "Tomato sauce, paneer, tikka masala sauce, bell peppers, onions, and mozzarella cheese.",
    price: 99,
    photoName: "pizzas/Paneer-Tikka-Pizza.jpg",
    soldOut: false,
  },
  {
    name: "Tandoori Chicken Pizza",
    ingredients: "Tomato sauce, tandoori chicken, red onions, bell peppers, and mozzarella cheese.",
    price: 140,
    photoName: "pizzas/Tandoori-Chicken-Pizza.jpg",
    soldOut: false,
  },
  {
    name: "Masala Pizza",
    ingredients: "Tomato sauce, bell peppers, and mozzarella cheese.",
    price: 49,
    photoName: "pizzas/Masala-Pizza.jpg",
    soldOut: false,
  },
  {
    name: "Uttapam Pizza",
    ingredients: "Dosa batter, traditional uttapam toppings, and cheese",
    price: 79,
    photoName: "pizzas/Uttapam-Pizza.jpg",
    soldOut: false,
  },
  {
    name: "Keema Pizza",
    ingredients: "Tomato sauce, spiced minced meat, onions, and mozzarella cheese",
    price: 129,
    photoName: "pizzas/Keema-Pizza.jpg",
    soldOut: true,
  },
  {
    name: "Onion Pizza",
    ingredients: "Tomato sauce, Thinly sliced & caramelized onions, Mozzarella cheese",
    price: 88,
    photoName: "pizzas/Onion-Pizza.jpg",
    soldOut: false,
  },
];


function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Onion Pizza"
        ingredients="Tomato sauce, Thinly sliced & caramelized onions, Mozzarella cheese"
        price={88}
        photoName="pizzas/Onion-Pizza.jpg"
      />

      <Pizza
        name="Keema Pizza"
        ingredients="Tomato sauce, spiced minced meat, onions, and mozzarella cheese"
        price={129}
        photoName="pizzas/Keema-Pizza.jpg"
      />
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div className="">
        <h1>{props.name}</h1>
        <p>{props.ingredients}</p>
        <span>{props.price + 2}</span>
      </div>
    </div>
  )
}

function Header() {
  /*const style = { color: "#ff6b6b", fontSize: "48px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", textAlign: "center", marginBottom: "20px" }*/
  return (
    <header className="header">
      <h1>Sangita belgain waffles and pizza Company</h1>
    </header>

  )
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <p>We are open!</p>
      ) : (
        <p>We are closed!</p>
      )}
    </footer>)
  // return React.createElement('footer', null, 'We are open!');
}


const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;

