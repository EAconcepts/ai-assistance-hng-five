import React from 'react'
import {useAssistant} from './AssistantContext'
import robot1 from '../assets/robot1.png'
import robot2 from "../assets/robot2.png";
const Assistance = () => {
    const {content, position, clearAssistant } = useAssistant()
    console.log(position)
  return (
    <div
      // className={`absolute p-4 transform bottom- top-[${position.y}] left-[${position.x}] -translate-x-[100%] -translate-y-[100%] `}
      style={{
        top: position.y,
        left: position.x,
        position: "absolute",
        transition: "  all 0.5s",
      }}
    >
      <p
      className={`${content && 'text-white rounded-lg border-2 border-slate-400 font-mono p-2 mt-2 max-w-[14rem] shadow-md shadow-slate-600'}`}
      >
        {content}
      </p>
      <div>
        <img src={content ? robot1 : robot2} alt="robot" className="w-24 h-28 " />
      </div>
    </div>
  );
}

export default Assistance