import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center">
        Your Main Heading Here
      </h1>
      <div className="flex h-screen items-center justify-center">
        <span className="text-6xl animate-spin">🚀</span>
      </div>
    </>
  );
}

export default App
