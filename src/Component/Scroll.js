import React from "react";
const Scroll =(props)=>{
    return(
      <div style={{overflowY: 'scroll', border: '1px solid white'  , height: 700 }}>
         {props.children}
         
         </div> 
        
    )
}
export default Scroll