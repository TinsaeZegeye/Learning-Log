import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
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
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Order Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;

  if (!pizzas) {
    return (
      <p>We are currently out of stock. Please wait till we came back again.</p>
    );
  }

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dished to choose from. All from
        our stone oven, all organic, all delicious.
      </p>

      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

function Pizza({ pizza }) {
  return (
    <div className={`pizza ${pizza.soldOut ? "sold-out" : null}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{`${pizza.soldOut ? "SOlD OUT" : pizza.price}`}</span>
      </div>
    </div>
  );
}

function Footer() {
  const openHour = 12;
  const closeHour = 20;
  const currentHour = new Date().toLocaleTimeString();

  return (
    <footer className="order">
      {currentHour >= openHour && currentHour < closeHour ? (
        <>
          <p>
            Order your favorite pizza right now. Come visit us or order online.
          </p>
          <Order />
        </>
      ) : (
        <p>
          CLOSED. We are open from {openHour}:00AM to {closeHour}:00PM.
        </p>
      )}
    </footer>
  );
}

function Order() {
  return <button className="btn">Order now</button>;
}

export default App;
