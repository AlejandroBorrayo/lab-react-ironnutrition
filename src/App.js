import foods from "./foods.json"
import FoodBox from "./Components/FoodBox"
import { Row, Divider, Button } from 'antd';
import { useState } from 'react';
import AddFoodForm from "./Components/AddFoodForm"
import Search from './Components/Search';

function App() {
  const [Foods,saveFoods]=useState(foods)
  const [Show, setShow] = useState(true)

  
  const [newfood,setNewFood] = useState({
    name:"",
    calories:"",
    image:"",
    servings:""
  })
  const [filtro,setFiltro]=useState("")
  const EncontrarFiltro = Foods.filter(food=> food.name.toLocaleLowerCase().includes(filtro))
  const Eliminar=(name)=>{
    const NuevoArreglo = Foods.filter(food=> food.name !== name)
    saveFoods(NuevoArreglo)
  }

  

  return (
    <div className="App">
      {Show === true ? <><AddFoodForm setNewFood={setNewFood} newfood ={newfood} saveFoods={saveFoods} Foods={Foods} setShow ={setShow} Show={Show}/> 
      <Button onClick={()=>setShow(!Show)}>{"Hide Form"}</Button></>
      : <Button onClick={()=>setShow(!Show)}>{"Add New Food"}</Button>
    }
      
      <Divider></Divider>
      <Search setFiltro={setFiltro} filtro={filtro} />
      <Divider></Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filtro !==""?       
        EncontrarFiltro.map(food=>(
        <FoodBox key={food.name} name={food.name} calories={food.calories} image = {food.image} servings = {food.servings} filtro={filtro}  Eliminar={Eliminar} />
      ))  : Foods.map(food=>(
        <FoodBox key={food.name} name={food.name} calories={food.calories} image = {food.image} servings = {food.servings} filtro={filtro}  Eliminar={Eliminar} />
      ))}
      </Row>

    </div>
  );
}

export default App;
