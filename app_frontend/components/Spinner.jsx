import React from 'react';
import RotateLoader from "react-spinners/RotateLoader";

function Spinner({ message }) {
  return (
    <div className="flex flex-col justify-center items-center z-[2000] bg-gray-200  h-screen w-full">
     
     <RotateLoader
        color={'blue'}
        loading={true}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;