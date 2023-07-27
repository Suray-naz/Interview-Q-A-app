import React from 'react'
import Main from '../main/Main'


const Liste = ({data}) => {

  return (
    <div>
        {data.map((item)=>(<Main{...item}/>))}
    </div>
  )
}

export default Liste