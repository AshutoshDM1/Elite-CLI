import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <h1 className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Vite + React
        </h1>

        <div className="flex gap-8 mb-12">
          <img
            src="/vite.svg"
            className="h-36 p-6 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] animate-pulse"
            alt="Vite logo"
          />
          <img
            src="/react.svg"
            className="h-36 p-6 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-[spin_5s_linear_infinite]"
            alt="React logo"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-purple-500 to-pink-500">
            Powered by Elite-CLI
          </h1>
        </div>
        <div className="card bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-xl font-bold hover:scale-105 transition-transform"
          >
            Power Level: {count}
          </button>
        </div>
        <p className="mt-8 text-gray-400 hover:text-blue-400 transition-colors">
          Unleash the power of Vite and React - Click the logos to learn more!
        </p>
      </div>
    </>
  );
}

export default App;
