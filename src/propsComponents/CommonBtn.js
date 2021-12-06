import React from 'react'

const CommonBtn = (props) => {
  const {text,description} = props;
  const pushAction = () => {
    alert(description);
  };

  return (
    <div>
      <button onClick={pushAction}>{text}</button>
    </div>
  )
}

export default CommonBtn
