import {React,useState} from "react";


function App() {
  const[data,setData]=useState(0);

  const handleClick1=()=>{
    setData(data+1)
  }

  const handleClick2=()=>{
    setData(data-1)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-4xl font-bold mb-4">Counter App</h1>
        <div className="flex items-center space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleClick2}
          >
            -
          </button>
          <p className="text-2xl font-bold">{data}</p>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleClick1}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
