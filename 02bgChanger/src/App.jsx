import { useState } from "react";

import "./App.css";

function App() {
  const [color, setcColor] = useState("white");

  return (
    <>
      <div className="w-screen h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setcColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => setcColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
            <button
              onClick={() => setcColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button
              onClick={() => setcColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              black
            </button>
            <button
              onClick={() => setcColor("gray")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "gray" }}
            >
              gray
            </button>
            <button
              onClick={() => setcColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              yellow
            </button>
            <button
              onClick={() => setcColor("white")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "white" }}
            >
              white
            </button>
            <button
              onClick={() => setcColor("purple")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
