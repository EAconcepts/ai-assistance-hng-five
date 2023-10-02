import React from 'react'
import {useAssistant} from './AssistantContext'
import robot1 from '../assets/robot1.png'
const Assistance = () => {
    const {content, position, clearAssistant } = useAssistant()
  return (
    <div className='bg-green-400 h-[10rem] absolute transform -translate-x-[100] -translate-y-[100]' style={{
        top: position.y,
        left: position.x,
        position: 'absolute',
        transition: "translate(-100%, -100%)"
    }}>
        {content}
        <div>
            <img src={robot1} alt='robot'/>
        </div>
    </div>
  )
}

export default Assistance