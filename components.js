 /*
/*
// components header,footer,content
// header component
// note : component name should be start with CAPITAL_LETTER
import React from 'react'

const Header=()=> {
 return (<h1 style= {
    {
    backgroundColor:"blue", color:"white"
   }
  }

  >To Do List</h1>)
}

export default Header //footer component
import React from 'react'

const Footer=()=> {
 const year=new Date();

 return (<footer>Copyright &copy; {
   year.getFullYear()
  }

  </footer>)
}

export default Footer;
//content component
import React from 'react'

const Content=()=> {
 function handleNamechange() {
  const names=["Multiply",
  "Grow",
  "Earn"];
  const int=Math.floor(Math.random()*3);
  return names[int];
 }

 function handlechnage() {
  alert("abhi");
 }

 function mouseover() {
  window.prompt("enter the age");
 }

 function doubleclick() {
  alert("your clicked 2 times");
 }

 return (<main style= {
    {
    justifyContent:"center"
   }
  }

  > <p onDoubleClick= {
   doubleclick
  }

  > Let`s {
   handleNamechange()
  }

  Money </p> <button onClick= {
   handlechnage
  }

  >onClick</button> <button onMouseOver= {
   mouseover
  }

  >OnMouseOver</button> </main>)
}

export default Content // App.js file(main component or root component)
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {

 return (<div className="App" > <Header /> <Content /> <Footer /> </div>);
}

export default App;
*/
/*
// inline css style
(1) <main style={ { justifyContent: "center" } }></main>(2) const Header=()=> {

return (<h1 style={ { backgroundColor:"blue", color:"white" } }>To Do List</h1>)
}

// exteral style
// file mame : index.css
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

html {
font-size: 22px;
}

body {
min-height: 100vh;
font-family: 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

.App {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
max-width: 500px;
border: 1px solid mediumblue;
margin: auto;
}

header {
width: 100%;
padding: 0 0.25em;
background-color: mediumblue;
color: aliceblue;
display: flex;
justify-content: space-between;
align-items: center;
}

main {
width: 100%;
display: flex;
flex-direction: column;
flex-grow: 1;
justify-content: flex-start;
align-items: center;
overflow-y: auto;
}


footer {
width: 100%;
padding: 0.25em;
background-color: mediumblue;
color: aliceblue;
display: grid;
place-content: center;
}

p {
color: #ee0e68;
}

button {
padding: 7px;
gap: 5px;
border-radius: 5px;
margin-top: 5px;
font-size: 15px;
background-color: aqua;
font-family: Arial, Helvetica, sans-serif;
}

// to use external css file we have have
// to import that css file
// import './index.css';
*/
/*
import React from 'react'

const Content = () => {
function handleNamechange(){
const names=["Multiply","Grow","Earn"];
const int=Math.floor(Math.random()*3);
return names[int];
}
function handleclick(){
alert("this is onClick evnet");
}
function handlemouse(){
window.prompt("Enter Your Name :");
}
function Doubleclick(){
console.log("this is double click event");
}
return (
<main style={{justifyContent:"center"}}>
 <p>
  Let`s {handleNamechange()} Money
 </p>
 <button onClick={()=>handleclick()}>Subscribe</button>
 <button onMouseOver={()=>handlemouse()}>Like</button>
 <button onDoubleClick={()=>Doubleclick()}>Double Click</button>
</main>
)
}

export default Content
*/






















* /