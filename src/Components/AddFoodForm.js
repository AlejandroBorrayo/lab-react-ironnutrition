// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm(props) {
  const {setNewFood,newfood,saveFoods,Foods} = props


  const newFood =(e)=>{
    setNewFood({...newfood,[e.target.name]:e.target.value})
  }
  const AñadirFood = (e)=>{
    e.preventDefault()
    saveFoods([...Foods, newfood])
    
    
  }



  return (
    <div>
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input name="name" type="text" onChange={newFood} />

      <label>Image</label>
      <Input  type="text" name='image' onChange={newFood} />
      

      <label>Calories</label>
      <Input  type="text" name='calories' onChange={newFood} />
      

      <label>Servings</label>
      <Input  type="text" name='servings' onChange={newFood} />


      <button style={{
        "display":"flex",
        "width":"4.5%",
        "margin":"10px 47.7%",
      }} type='submit' onClick={AñadirFood}>Create</button>
    </form>
    </div>
  );
}

export default AddFoodForm;
