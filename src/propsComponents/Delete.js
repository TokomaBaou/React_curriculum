import React from 'react'
import CommonBtn from './CommonBtn'

const Delete = () => {
  const text = "delete";
  const description = "delete!!";
  return (
    <div className="text-base text-black-400 bg-yellow-300 p-1 m-2 w-20 rounded-3xl text-center">
      <CommonBtn text={text} description={description}/>
    </div>
  )
}

export default Delete
