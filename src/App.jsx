
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'


function App() { 

  function handelClick(){
    alert('click me')
  }
  const handelClick2 = () =>{
    alert('click 2')
  }
  const addToFive = (num)=> {
    alert(num + 5)
  }

  return (
    <>
      <h1> React core concept-2</h1> 
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handelClick}>Click Me</button> 
      <button onClick={handelClick2}>Click 2</button> 
      <button onClick={() =>{alert('third click')}}>Click 3</button>
      <button onClick={() => {addToFive(3)}}>Click 4</button>
    </>
  )
}

export default App
