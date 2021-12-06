import React from 'react'
import CommonBtn from './CommonBtn'

const Edit = () => {
  const text = "edit";
  const description = "edit!!";
  return (
    <div className="text-base text-black-400 bg-green-400 p-1 m-2 w-14 rounded-3xl text-center mr-52">
      <CommonBtn text={text} description={description}/>
    </div>
  )
}

export default Edit
