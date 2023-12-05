import React, { useMemo, useState } from 'react'
import "./App.css"
const App = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);

function onHeightChange(event){
setHeight(event.target.value);
}
function onWeightChange(e){
setWeight(e.target.value);
}
//optimizing prerformance
const output= useMemo(()=>{
const h=height/100;

return (weight/(h*h)).toFixed(1);// 1 point tk hi value ayegi

},[weight,height]);
  return (

    <main>
      <h1>BMI Calculator</h1>

      <div className='input-section'>
        <p className='slider-output'>Weight : {weight} KG</p>
        <input className='input-slider' type='range' step="1" min="40" max="200"
        onChange={onWeightChange}
        ></input>
        <p className='slider-output'>Height : {height} cm</p>
        <input
          className='input-slider' type='range'
          step='1' min='140' max="220"
          onChange={onHeightChange}

        />

      </div>
      <div className='output-section'>
        <p>Your BMI is </p>
        <p className='output'>{output} </p>
      </div>

    </main>
  )
}

export default App