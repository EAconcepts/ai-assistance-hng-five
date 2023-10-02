import React from 'react'
import {useAssistant} from './AssistantContext'
import robot1 from '../assets/robot1.png'
const Assistance = () => {
    const {content, position, clearAssistant } = useAssistant()
    console.log(position)
  return (
    <div 
    // className={`absolute p-4 transform bottom- top-[${position.y}] left-[${position.x}] -translate-x-[100%] -translate-y-[100%] `} 
    style={{
        top: position.y,
        left: position.x,
        position: 'absolute',
        transition: "translate(0%, -100%) transform all 3s"
    }}>
        {content}
        <div>
            <img src={robot1} alt='robot' className='w-24 h-28'/>
        </div>
    </div>
  )
}

export default Assistance