import React from 'react'
import Q from "./questions.json"
function Json() {
  return (
    <div>
        
     {Q.questions.map((item)=>

    <div>{item.question}
   <p>{item.options}</p>
    
    </div>)}
    
    
    </div>
  )
}

export default Json