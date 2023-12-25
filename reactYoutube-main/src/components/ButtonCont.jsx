import React from 'react'
import Button from './Button'

const list = ["All",'Lives','Cricket','Music','Movies','Pubg','C', 'C++','JavaScript','Go',"Rust",'Php','Node','React','Java']

function ButtonCont() {
  return (

    <div className='flex'>

    {
      list.map((item, index) => {
        return <Button name={item} key = {index}/>
      })
    }
    </div>
  )
}

export default ButtonCont
