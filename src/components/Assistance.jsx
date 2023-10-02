import React from 'react'
import {useAssistant} from './AssistantContext'
import robot1 from '../assets/robot1.png'
const Assistance = () => {
    const {content, position, clearAssistant } = useAssistant()
    console.log('hey there')
  return (
    <div 
    className={`absolute p-4 transform bottom-0 top-[${position.y}] left-[${position.x}] `} 
    style={{
        // top: position.y,
        // left: position.x,
        // position: 'absolute',
        // transition: "translate(-100%, -100%)"
    }}>
        {content}
        <div>
            <img src={robot1} alt='robot' className='w-24 h-28'/>
        </div>
    </div>
  )
}

export default Assistance