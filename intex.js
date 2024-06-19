/*
REACT useState() hook
import React, { useState } from 'react';
const Content = () => {
  const [name, setName] = useState("Earn");
  function handleNameChange() {
    const names = ["Multiply", "Grow", "Earn"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }
  return (
    <main style={{ display: 'flex', justifyContent: 'center' }}>
      <p>Let's {name} Money</p>    
      <button onClick={handleNameChange}>Subscribe</button>
    </main>
  );
}
export default Content;

// react useState() another exaple
import React, { useState } from 'react';

const Content = () => {
  const [name, setName] = useState("Earn");
const [count,setCount]=useState(0);
function decreasebtn(){
  setCount((prevcount)=>{return prevcount-1});
}
function increasebtn(){
  setCount((prevcount)=>{return prevcount-1});
}
  return (
    <main style={{ display: 'flex', justifyContent: 'center' }}>
      <p>Let's {name} Money</p>    
      
      <button onClick={decreasebtn}>-</button>
     <span>{count}</span>
      <button onClick={increasebtn}>+</button>
    </main>
  );
}

export default Content;
// list and keys
import React, { useState } from 'react';

const Content = () => {
  const courses=[
   {id:1,name:"java course"},
   {id:2,name:"python course"},
   {id:3,name:"english course"},
   {id:4,name:"DSA course"},
   {id:5,name:"JS course"},
  ];
 //let x=courses.map(data=>{console.log(data.name)});
  //console.log(x);
  return (
    <main style={{ display: 'flex', justifyContent: 'center' }}>
       <div>
        <ul>
          {courses.map(data=>(
           <li key={courses.id}>{data.name}</li>
          ))}
        </ul>
        <ul>
          {courses.map((data,index)=>(
           <li key={index}>{data.name}</li>
          ))}
        </ul>
        </div>      
    </main>
  );
}
export default Content;
// React Icons
import React, { useState } from 'react';
import { FA2 } from '@icongo/fa';
import { FACopyright } from '@icongo/fa';
import { FACrown } from '@icongo/fa';
import { FADesktop } from '@icongo/fa';
import { FAEllo } from '@icongo/fa';
import { FAFileArrowDown } from '@icongo/fa';
const Content = () => {
  return (      
    <main style={{ display: 'flex', justifyContent: 'center' }}>    
      <FA2 /><bR></bR>
    <FACopyright /><br></br>
    <FACrown /><br />
    <FADesktop /><br></br>
    <FAEllo /><br></br>
    <FAFileArrowDown />
    </main>
  );
}
export default Content;
*/