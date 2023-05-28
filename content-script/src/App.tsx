/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />
// import "./App.css";
import { AutoComplete } from "primereact/autocomplete";
import "primereact/resources/primereact.min.css";        
                           

function App() {
  return (
        <div className="flex-col items-center justify-center rounded-lg shadow-lg px-6 py-10 bg-black bg-opacity-20 w-10/12 mx-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-lg z-[100]">
          {/* <div className="absolute w-full bg-black"></div> */}
<div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-5xl font-extrabold">D-Bar</div> 
 <AutoComplete/>
    </div>
  );
}

export default App;
