import { useState } from "react";

export default function Test(){
    const[count, setCount] =useState(0);

    return(
        <div className='w-full h-screen flex justify-center items-center '>
            <div className='w-[300px] h-[300px]  shadow-2xl flex justify-center items-center'>
                <button 
                    className='w-[100px] h-[50px] bg-red-700 text-white justify-center items-center'
                    onClick={()=>{
                        setCount(count - 1);
                    }}>
                     Decrement
                </button>

                <h1 className="w-[100px] h-[50px] text-[30px] text-center">{count}</h1>

                <button className="w-[100px] h-[50px] bg-blue-700 text-white justify-center items-center"
                    onClick={()=>{
                            setCount(count + 1);
                        }}>
                    Incriment
                </button>

            </div>
        </div>
    )
}