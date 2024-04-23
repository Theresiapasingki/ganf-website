import React from "react";

const NewProduct = (props) => {
  return (
    <>
      <div className="flex flex-row gap-4 w-64 h-96 border-solid border-[#FDC5CC] rounded-xl">
        <div className="flex flex-col items-center text-[#3C6CA8] text-xl font-semibold">
          <img src={props.src} alt="" className="h-full"/>
          <p>White Series - Coconut</p>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
