import React from "react";

const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-800 text-center text-white p-3 mb-3 font-bold uppercase rounded-md">
      <p className="">{mensaje}</p>
    </div>
  );
};

export default Error;
