import React from 'react'
import CommonBtn from './CommonBtn'

const Submit = () => {

  const text = "submit";
  const description = "submit!!";
  return (
    <div className="text-base text-black-400 bg-pink-400 p-1 m-2 w-20 rounded-3xl text-center mr-52">
      <CommonBtn text={text} description={description}/>
    </div>
  )
}

export default Submit
