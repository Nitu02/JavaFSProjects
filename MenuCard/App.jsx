import './App.css';

function App() {
  return (
    <> 
      <p style={{ textAlign: "center", color: 'brown', fontSize: "28px", fontWeight: "bold" }}>
        Our Menu 🍕
      </p>
      <div className="component">
        <Pizza name='Onion Pizza'
          ingredient='Onion, cheese, capsicum'
          price='₹60'
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtA5vVA9c8k82OQ2czLg3w7MWCzapWFfUhCQ&s" />
        <Pizza name='Capsicum Pizza'
          ingredient='Cheese, capsicum'
          price='₹60'
          image="https://www.awesomecuisine.com/wp-content/uploads/2014/01/capsicum-pizza.jpg" />
        <Pizza name='Extra Cheese Pizza'
          ingredient='Extra cheese, capsicum'
          price='₹50'
          image="https://media.istockphoto.com/id/1393150881/photo/italian-pizza-margherita-with-cheese-and-tomato-sauce-on-the-board-on-grey-table-macro-close.jpg?s=612x612&w=0&k=20&c=kL0Vhg2XKBjEl__iG8sFv31WTiahdpLc3rTDtNZuD2g=" />
        <Pizza name='Farmhouse Pizza'
          ingredient='Onion, tomato, cheese, capsicum'
          price='₹80'
          image="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/f9701b4e9e6aae4febe5e52c9f5e36f9" />
        <Pizza name='Onion Tomato Pizza'
          ingredient='Onion, tomato, cheese'
          price='₹70'
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJ7rSExGFHPb48XzS_7PNfLYlqXkJeZfsWKvmfKLbD9gQGdA_cUwQuIB8Uti6IYPAPLA&usqp=CAU" />
        <Pizza name='Paneer Pizza'
          ingredient='Paneer, cheese, capsicum, onion'
          price='₹90'
          image="https://i0.wp.com/khaddoroshik.com/wp-content/uploads/2024/01/Homemade-Paneer-Pizza-Recipe.webp?resize=1024%2C1024&ssl=1" />
      </div>
    </>
  );
}

function Pizza(props) {
  return (
    <div className="Pizza">
      <img src={props.image} alt={props.name} />
      <h3 className="pizza-name">{props.name}</h3>
      <p className="pizza-ingredient">{props.ingredient}</p>
      <p className="pizza-price">{props.price}</p>
    </div>
  );
}

export default App;
