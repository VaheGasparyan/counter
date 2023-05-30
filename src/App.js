import {useState} from "react";

import Count from "./components/count";
import IsFive from "./components/isFive";
import './App.css';


const App = () => {
    const [counterValueOne, setCounterValueOne] = useState(0);
    const [counterValueTwo, setCounterValueTwo] = useState(0);

    const handleAddNumber = (event) => {
        const { id } = event.target;

        if(id === 'first') {
            setCounterValueOne(prevState => prevState + 1)
        } else {
            setCounterValueTwo(prevState => prevState + 1)
        }
    }

  return (
    <div className="App">
      <div className="counter-1">
          <h2 className="title">Counter 1:</h2>
          <div className="btn_counter">
              <button id='first' onClick={handleAddNumber}>+</button>
              <Count value={counterValueOne} id={1} />
          </div>
      </div>

        <div className="counter-2">
            <h2 className="title">Counter 2:</h2>
            <div className="btn_counter">
                <button id='second' onClick={handleAddNumber}>+</button>
                <Count value={counterValueTwo} id={2}/>
                <IsFive value={counterValueTwo} />
            </div>
        </div>
    </div>
  );
}

export default App;
