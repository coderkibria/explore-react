
import './App.css'
import Counter from './Counter';
import Users from './Users';

function App() {

  function handleClick(){
    alert('button clicked');
  }
  
  const handleClick2 = () => {
    alert('Button 2 Clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }


  return (
    <>

      <h2>React Core Concept 2</h2>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick} >Click Me</button>
      <button onClick={handleClick2} >Click 2</button>
      <button onClick={() => addToFive(3) } >Four Button</button>

    </>
  )
}


export default App
