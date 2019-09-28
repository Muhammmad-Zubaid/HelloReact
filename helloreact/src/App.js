import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [Counter,setCounter] = useState(10)
  let [name , setName] = useState("")
  let [obj,setObj] = useState({name : "" , age : 10})

  const UpdateCounter = () => {
    setCounter(Counter +1 )
  }

  const UpdateName = () => {
    setName(name  = "Muhammad Zubaid" )
  }

  const UpdateObject = () => {
    const newObj = {...obj};
    newObj.name ="Muhammad Asad";
    newObj.age = 60 ;
    newObj.Class = "Intermediate"

//    setObj(newObj);
    setObj({
      name : "Muhammad Zuabid",
      age : 50,
      Class : "Matric"
    });

 
  }

  return (
    <div className="App">
    {Counter}
    <br/>
    {name}
    <br/>
    {obj.name} - {obj.age} - {obj.Class}
    <br/>
    <button onClick={() => {setCounter(Counter +1 )}}>update</button>
    <button onClick={UpdateCounter} >update 2</button>
    <button onClick={UpdateName} >update Name</button>
    <button onClick={UpdateObject} >update oBJECT</button>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
