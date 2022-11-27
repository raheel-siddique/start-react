import React from "react";
import { useState } from "react";
import './UserData.css'


const UserData=()=>{
    const [nameValue, setNameValue]=useState('')
    const [showValueName, setShowValueName]=useState('')


    const getNameValue=(event)=>{
            // console.log("get event",event.target.value)
            setNameValue(event.target.value)
    }

    const showValue=()=>{
        setShowValueName(nameValue)
    }
    return(
        <>
          <div className='main_div_form'>
<div className="form_div">
    <div>
          <h1 className="show_heading">Hello {showValueName}</h1>
    </div>
    <div className="inout_fld_div">
         <input type="text" placeholder="type your name" className="my_input_filed" value={nameValue}  onChange={getNameValue} />
    </div>
    <div className="button_div">
     <button className="my_btn" type="submit" onClick={showValue}> Submit</button>
    </div>
</div>

          </div>
        </>
    )
}
export default UserData