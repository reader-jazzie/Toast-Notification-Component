import React from 'react';
import ToastContainer from './ToastContainer';

function App() {
  return (
    <div className="md:bg-zinc-400 min-h-screen ">
    <h1 className="text-4xl font-extrabold text-white text-center underline">
      Toast Notification Component
    </h1>
    <div className="flex justify-center items-center mt-10">
  <div className="w-50 h-50 rounded md:bg-teal-50"> 
  <ToastContainer/>
  </div>
  </div>
      
    </div>
  );
}

export default App;