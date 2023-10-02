import {useRef, useEffect} from 'react'

function Home() {

  const ref = useRef(null)
  useEffect(()=>{
    if(ref.current){
      console.log('hey')   
      ref.current.addEventListener('onmousehover', ()=>{
        console.log('dad')
        var rect = e.target.getBoundingClientRect()
        console.log(rect)
      })  
    }
  },[])
 const buttons = [
   { name: "Button 1", content: "This button goes to the Dashboard" },
   { name: "Button 2", content: "This button goes to the Settings Page" },
   { name: "Button 3", content: "This button goes to the Profile Page" },
   { name: "Button 4", content: "This button goes to the Home Page" },
 ];
 
  return (
    <div className="w-full relative flex flex-col">
      <div className="flex justify-around mt-20 ">
        <button ref={ref} className="rounded-lg py-3 px-5 border">Button 1</button>
        <button className="rounded-lg py-3 px-5 border">Button 2</button>
      </div>
      <div className="flex justify-around mt-40 gap-4">
        <button className="rounded-lg py-3 px-5 border"> button 3</button>
        <button className="rounded-lg py-3 px-5 border"> button 4</button>
      </div>
    </div>
  );
}

export default Home
