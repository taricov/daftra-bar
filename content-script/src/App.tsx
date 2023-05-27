/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />
// import "./App.css";
import { AutoComplete } from "primereact/autocomplete";
import "primereact/resources/primereact.min.css";        
                           

function App() {
  return (
        <div className="flex-col items-center justify-center rounded-lg shadow-lg px-6 py-10 bg-violet-500 !bg-opacity-10 w-10/12 mx-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 after:content-[''] after:fixed after:top-0 after:left-0 after:w-screen after:h-full after:bg-black">
          {/* <div className="absolute w-full bg-black"></div> */}
<div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-5xl font-extrabold">D-Bar</div> 
 <AutoComplete/>
    </div>
  );
}

export default App;
