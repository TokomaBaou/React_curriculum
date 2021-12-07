import React from 'react';

const CommonBtn = (props) => {
  const {child,text,color} = props;
  const onClickButton = () => alert(text);
  return (
    <div>
      <button onClick={onClickButton} className = {`text-base text-black-400 p-1 m-2 w-20 rounded-3xl text-center ${color}`}>
        {child}
      </button>
    </div>
  );
};

export default CommonBtn;
