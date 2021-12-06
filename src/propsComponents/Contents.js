import React from 'react'
import Delete from './Delete'
import Edit from './Edit'
import Submit from './Submit'

function Contents() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex justify-between">
        <Submit />
        <Edit />
        <Delete />
      </div>
    </div>
  )
}

export default Contents
