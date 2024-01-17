import React, { useState } from "react";

function App() {
  const[name1, setName1]= useState("")
  const[name2, setName2]= useState("")
  const[result, setResult]= useState("")


  function calculateRelationship(){

    if(name1=="")
    {
      setResult("Enter valid name")
    }
    else if(name2=="")
    {
      setResult("Enter valid name")
    }

    const newArray1= name1.toLowerCase().split('');
    const newArray2= name2.toLowerCase().split('');

    for(let i=0; i<=newArray1.length; i++)
    {
      for(let j=0; j<=newArray2.length; j++)
      {
        if(newArray1[i]===newArray2[i])
        {
          newArray1.splice(i, 1);
          newArray1.splice(j, 1);
          i--;
          break;
        }
      }
    }

    const array1Length= newArray1.length;
    const array2Length= newArray2.length;

    const sum= array1Length + array2Length;

    const output= sum%6;

    switch(output)
    {
      case 0: 
        setResult("Siblings")
        break;
      case 1: 
        setResult("Friends")
        break;
      case 2: 
        setResult("Love")
        break;
      case 3: 
        setResult("Affection")
        break;
      case 4: 
        setResult("Marriage")
        break;
      case 5: 
        setResult("Enemy")
        break;
      default:
        setResult("")
        break;
    }
  }

  function clearData(){
    setName1("");
    setName2("");
    setResult("");
  }

  
  return (
    <div>
      <input type="text" placeholder="enter name 1" onChange={(e)=>setName1(e.target.value)} value={name1}/>
      <input type="text" placeholder="enter name 2" onChange={(e)=>setName2(e.target.value)} value={name2}/>
      <button onClick={calculateRelationship}>Calculate relationship</button>
      <button onClick={clearData}>Clear</button>

      {
        result && (
          <div>
            <h3>{result}</h3>
          </div>
        )
      }
    </div>
  )
}

export default App;
