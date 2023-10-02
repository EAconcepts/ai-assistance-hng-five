import {useRef, useEffect} from 'react'
import { useAssistant } from './components/AssistantContext';

function Home() {
const {clearAssistant, triggerPopup} = useAssistant()
 
 const buttons = [
   { name: "Button 1", content: "This button goes to the Dashboard" },
   { name: "Button 2", content: "This button goes to the Settings Page" },
   { name: "Button 3", content: "This button goes to the Profile Page" },
   { name: "Button 4", content: "This button goes to the Home Page" },
 ];
 
const handleMouseOver = (e) => {
    let rect = e.target.getBoundingClientRect()
    console.log(rect);
    triggerPopup(e.target.getAttribute("aria-label"), {
      x: rect.x + rect.width,
      y: rect.y + rect.height,
    });
  }
  const handleMouseOut = (e) => {
    console.log(e);
    clearAssistant()
  }
  return (
    <div className="w-full relative flex flex-col">
    
      <div className="w-full mt-24 px-5 grid grid-cols-2 gap-32">
        {buttons.map((btn) => (
          <button
            aria-label={btn.content}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="w-fit rounded-lg py-3 px-5 border uppercase font-medium"
          >
            {btn.name}
          </button>
        ))}
      </div>
      {/* <div className="flex justify-around mt-40 gap-4">
        <button
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="rounded-lg py-3 px-5 border"
        >
          button 3
        </button>
        <button
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="rounded-lg py-3 px-5 border"
        >
          {" "}
          button 4
        </button>
      </div> */}
    </div>
  );
}

export default Home
