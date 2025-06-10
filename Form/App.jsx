import "./App.css"
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("guest");
  const [age, setAge] = useState(0);
  const [shipping, setShipping] = useState(false);
  const [payment, setPayment] = useState("credit");
  const [comment, setComment] = useState("");

  function NameHandler(event){
    setName(event.target.value)
  }
  function AgeHandler(event){
    setAge(event.target.value)
  }
  function ShippingHandler(event){
    setShipping(event.target.value)
  }
  function PaymentHandler(event){
    setPayment(event.target.value)
  }
  function CommentHandler(event){
    setComment(event.target.value)
  }
  function handleSubmit() {
    alert("Form submitted!");
    setName("guest");
    setAge(0);
    setShipping(false);
    setPayment("credit");
    setComment("");
  }

  return (
    <>
      <div>
        <input value={name} onChange={NameHandler}/>
        <p>Name:{name}</p>
        <input value={age} type="number" onChange={AgeHandler}/>
        <p>Age:{age}</p>
        <textarea value={comment} placeholder="Enter the comment" onChange={CommentHandler}/>
        <p> Comment:{comment}</p>
        <select value={payment} onChange={PaymentHandler}>
          <option value="credit">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="cash">Cash on Delivery</option>
        </select>
        <p>Payment:{payment}</p>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default App;
