import React from 'react'
import Card  from './Card'
// import {uname} from './Component/userName'
function UnameArray({uname}) {
    
  return (
   
    <div>    
       {
        uname.map((user,index)=>{
            return <Card  key={uname.index} name= {uname[index].name} id={uname[index].id} email={uname[index].email}/>
         })
       }
    </div>
  )
}

export default UnameArray