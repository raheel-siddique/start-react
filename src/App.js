import React from 'react';
import { useState } from 'react';
import './UserData.css'


const App=()=>{
// const [myNameValue, setMyNameValue]=useState("")
// const [myPasswordValue, setMyPasswordValue]=useState("")
// const [myEmailValue, setMyEmailValue]=useState("")


  const [myData, setMyData]=useState({
     myName:"",
     myPassword:'',
     myEmailValue:"",
  })


// const getNameValue=(event)=>{
//     // console.log(event.target.value);
//     setMyNameValue(event.target.value)
// }
// const getPasswordValue=(event)=>{
//   // console.log(event.target.value);
//   setMyPasswordValue(event.target.value)
// }

// const getEmailValue=(event)=>{
//   // console.log(event.target.value);
//   setMyEmailValue(event.target.value)
// }


 const getData=(event)=>{
     if(event.target.name==='myName'){
      // setMyData({
      //   ...myData,
      //   myName:event.target.value
      
      // })
      setMyData((prevData)=>{
        return{
          ...prevData,
          myName:event.target.value,
        }
      })
     }else if(event.target.name==='password'){
      setMyData((prevData)=>{
        return{
          ...prevData,
          myPassword:event.target.value,
        }
      })

     }
     else if(event.target.name==='email'){
      setMyData((prevData)=>{
        return{
          ...prevData,
          myEmailValue:event.target.value,
        }
      })
     }
 }

  const formSubmit=()=>{
  alert('form has been submitted')
}

  return(
    <>
          <div className='main_div_form'>
<div className="form_div">
    <div>
          <h1 className="show_heading">my name is {myData.myName}</h1>
          <h1 className="show_heading">my password is {myData.myPassword} </h1>
          <h1 className="show_heading">my email is {myData.myEmailValue}</h1>


    </div>
    <div className="inout_fld_div">
         <input type="text" placeholder="type your name" name='myName' value={myData.myName}  className="my_input_filed" onChange={getData}    />
    </div>
    <br />

    <div className="inout_fld_div">
         <input type="password" placeholder="type your password" name='password' value={myData.myPassword}  className="my_input_filed" onChange={getData}    />
    </div>

<br />
    <div className="inout_fld_div">
         <input type="email" placeholder="type your email" name='email'value={myData.myEmailValue} className="my_input_filed"  onChange={getData}    />
    </div>
<br />
    

    <div className="button_div">
     <button className="my_btn" type="submit" onClick={formSubmit}> Submit</button>
    </div>
</div>

          </div>
    </>
  )
}
export default App