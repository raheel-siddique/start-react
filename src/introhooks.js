// two types of components

// 1)functional component (best ,easy , and short syntax)
// 2)class componetn(good, hard, long syntax)


//    hooks

// hooks are the best feature of functional component

// hooks allow to access state, and other react feature without writting a class

// There are 3 rules for hooks:

// Hooks can only be called inside React function components not in class component.
// Hooks can only be called at the top level of a component.
// Hooks cannot be conditional


//    there are many hooks in functional component
// 1)useState() state management(kisi bhi cheez ki halat ko change karna)
// 2)useEffect()  api calling k lye sideoffect of functional comp
// 3)useContext() state managment
// 4)useRef()    dom ki value ko directly get karne k lye use hota he 
// 5)useCallback()   
// 6)useMemo()    
// 7)useLocation() 
// 8)useParams()
// 9)useReducer() state managment 



// 1)   useState()

// what is useState() hook??



// The React useState Hook allows us to track state in a function component.

// State generally refers to data or properties that need to be tracking in an application.         


// To use the useState Hook, we first need to import it into our component.

// import { useState } from "react";

// const [initialValue, setInitalValue]=useState('Raheel Siddique')

//    there are 2 scenerios
// 1) first one is pass initial value variable name that can everything
//  2) and pass setState variable by name of inital variale value(jo update kre ga value ko )
// 3) useState('inital value') whcih do u want to keep
// variable ki inital value ko define krna 
// variable ki value ko change krna





// import logo from './logo.svg';
// import './App.css';
// import {useState} from 'react'

// function App() {   
//  const [myName, setMyName]=useState('Raheel Siddique ')
//  const [myClass, setMyClass]=useState('matric')
 


//   const changeData=()=>{
//     setMyName('rasim siddique')
//     setMyClass('inter')
//   }
//   const backData=()=>{
//     setMyName('Raheel Siddique')
//     setMyClass('matric')
//   }
 
//   return (
//     <>
    
//        <h1>{myName}</h1>
//        <h1>my class is {myClass}</h1>
//         <button onClick={changeData}>change data</button>
//         <button onClick={backData}>back data</button>

        

//     </>
   
//   )
// }

// export default App;



// counter application 



// const App=()=>{
//     const [startCount, setStartCount]=useState(0)
  
//     const incrementQuantity=()=>{
//       //  let initialValueOfCounter=startCount+1
//       //  setStartCount(initialValueOfCounter)
//         if(startCount<10){
//           setStartCount(startCount+1)
  
//         }else{
//           alert('cant go above 10')
//         }
//     }
  
//   const decrmentQuantiy=()=>{
//     if(startCount>=1){
//       setStartCount(startCount-1)
  
//     }else{
//       alert('cant go below 0')
  
//     }
//   }
//     return(
//       <>
//       <div style={{display:'flex', justifyContent:'center', marginTop:250}}>
//          <button onClick={incrementQuantity}>+</button>
//          <h1>{startCount}</h1>
  
//          <button onClick={decrmentQuantiy}>-</button>
//          </div>
//       </>
//     )
//   }
//   export default App