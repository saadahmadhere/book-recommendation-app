 import List from "./List"
 import Header from "./Header"
 import { useState } from "react";

function App() {
  const [displayItems, setDisplayItems] = useState("Philosophy");

  const heading = Object.keys(List);

  const clickHandler = (e) =>{
      setDisplayItems(e.target.innerHTML);
      
  }

  return (
    <div className="App">
      <Header/>
      <div className="genre-title">
        {heading.map(item => (
          <div className="title" onClick={clickHandler}>
            {item}
          </div>
        ))}
      </div>
      <hr />
      <div>
       {List[displayItems].map(item =>(
        <div className = "list-items">   
         <h2>{item.title}</h2>
         <p>{item.rating}</p>
        </div>
       ))}
      </div>
    </div>
  );
}

export default App;
