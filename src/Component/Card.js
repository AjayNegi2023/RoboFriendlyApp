import React from 'react'
import 'tachyons'
function Card(props) {

    const {name,id ,email}=props
  return (
     

        <div className="tc dib bw2 bg-light-green br3 pa2 ma2 grow   shadow-5">
        <img alt="photo" src={`https://robohash.org/${props.id}?size=350x210`}/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>

        </div>
  
  )
}

export default Card