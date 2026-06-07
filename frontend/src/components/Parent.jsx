import React from 'react'
import Child from './Child'

const Parent =() => {
  return (
    <div>
        <Child name ="sarmatha" age={99}
        mark={[95,93,99,98,92]} 
        person={{name:"Sarmatha",dept:["Bsc.CT"]}}/>
    </div>
  )
}

export default Parent