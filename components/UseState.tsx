
"use client"
import { useState } from 'react';
import { Button } from './ui/button'


export default function UseState() {

    const [count,setcount] = useState(0);

    const increment = () => { setcount(count+1)};
    const decrement = () =>{ 

        if(count<=0) return;
        

         setcount(count-1)}




  return (
    <div className=' flex text-3xl justify-center h-screen items-center font-bold gap-5 '>
        
        <Button onClick={increment} variant="destructive">+</Button>
        {count}
        <Button onClick={decrement}>-</Button>
        



    </div>
  )
}
