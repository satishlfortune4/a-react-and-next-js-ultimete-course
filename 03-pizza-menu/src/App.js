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
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>

          <p>Authentic indian cuisine, 6 creative disesh to choose from our kitchen all orignic, All delicious  </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza
                pizzaObj={pizza}
              />
            ))};
          </ul>
        </>
      ) : (<p>we are working on our menu. pleasae come back later</p>)}

      {/* <Pizza
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
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div className="pizza-info">
        <h1>{pizzaObj.name}</h1>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  )
}

function Header() {
  /*const style = { color: "#ff6b6b", fontSize: "48px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", textAlign: "center", marginBottom: "20px" }*/
  return (
    <header className="header">
      <h1>pizza Company</h1>
    </header>

  )
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 7;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (<p>we are happy to searve our betweeb {openHour}:00 and {closeHour}:00</p>)}
    </footer>)
  // return React.createElement('footer', null, 'We are open!');
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>we are open from {openHour} untill {closeHour}:00 come visit us or order online</p>
      <button className="btn btn-primary">Order Now</button>
    </div>
  )
}


const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;




