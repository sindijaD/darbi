import React from "react";



let getValue= "no inputs";


const ChangeOutput=(event)=>{
  console.log(event.which)
  if(event.which === 13){
    console.log('asdsa')
  }

}


function inputs() {
  return (
    <>
      <input type="text" className="getvalue" onKeyDown={ChangeOutput} placeholder="write something here" />
      <p>{getValue}</p>
    </>
  )
  
}

  

export default inputs;
