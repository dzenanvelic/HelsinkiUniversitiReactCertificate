import { useState } from "react";
import Button from "./components/Button";
import Statictics from "./components/Statictics";


function App() {

  const[good, setGood]= useState(0)
  const[neutral, setNeutral]= useState(0)
  const[bad, setBad]= useState(0)
const[all,setAll]= useState(0)
const[average,setAverage]= useState(0)
const[positive,setPositive]= useState(0)

let aver=((average)/(all)).toFixed(2)
let posit=(((positive)/(all))*100).toFixed(1) + "%"
const goodHandleClick=()=>{
  
  setGood(good + 1);
  setAll(all + 1);
  setAverage((average + 1) )
  setPositive(positive + 1 )
}
const neutralHandleClick=()=>{
setNeutral(neutral + 1)
setAll(all + 1)
}
const badHandleClick=()=>{
setBad(bad + 1)
setAll(all + 1)
setAverage((average - 1) );

}



  return (
    <div className="mainApp">
    <h1>Give Feedback</h1>
    <Button handleClick={ goodHandleClick} name={'good'}/>
    <Button handleClick={neutralHandleClick} name={'neutral'}/>
    <Button handleClick={badHandleClick} name={'bad'}/>

    <h1>Statistics</h1>
    {
     good || neutral || bad ? (
       <>
       <table>
        <tr>
           <Statictics name={"good"} quantity={good}/>
       
<td><Statictics name={"neutral"} quantity={neutral}/></td>
<td> <Statictics name={"bad"} quantity={bad}/></td>
<td> <Statictics name={"all"} quantity={all}/></td>
<td><Statictics name={"average"} quantity={aver}/></td>
<td><Statictics name={"positive"} quantity={posit} /></td>
 </tr>
       </table>
     
    
   
   
    
    
  </>
  )
    :
           (<h3>No feedback given</h3>) 
     }
    
    
    
    
    </div>
  );
}

export default App;
