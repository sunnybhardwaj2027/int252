import React, { useRef } from "react";

function Refcount() {
  const inputRef = useRef(null);
  const countRef = useRef(null);
  const valRef = useRef(0); 

  const handler = () => {
    valRef.current = valRef.current + 1;
    countRef.current.innerText = `Current value: ${valRef.current}`;
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <input
        ref={inputRef}
        type="text"
        placeholder="type here..."
        className="border rounded-md p-2 m-2"
      />

      <h1 ref={countRef} className="text-xl font-bold">
        Current value: {valRef.current}
      </h1>

      <button
        onClick={handler}
        className="bg-blue-400 text-white font-bold border-2 px-4 py-2 rounded mt-2"
      >
        Increase
      </button>
    </div>
  );
}

export default Refcount;
