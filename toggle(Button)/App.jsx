import './App.css';
import{useState,useSyncExternalStore} from "react"
function App(){
  const[food,setFood]=useState(['Pasta','Pizza','Vada Pav','Idli'])

  function AddFoodItem(e){
    const newItem=document.getElementById("foodItem").value
    document.getElementById("foodItem").value=""
    setFood(f=>[...f,newItem]);
  }
  function RemoveFoodItem(index){
    setFood(food.filter((_,i)=>i!==index))
  }
  return(
    <div>
      <p>Food List!!!!!!</p>
      <ul>
        {food.map((ele,idx)=> <li key={idx} onClick={() => RemoveFoodItem(idx)}>{ele}</li>
        )}
      </ul>
      <input id ='foodItem'></input>
      <button onClick={AddFoodItem}>Add Item</button>
    </div>
  )
}
export default App
