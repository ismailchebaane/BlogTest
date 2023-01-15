import React from 'react'

function RightCard(props) {
    return (
        <div className='w-max  rounded-sm shadow-md bg-white mb-14 h-max px-6 py-6'>
            <div className='flex justify-around w-max mb-4'>  <h1 className="font-bold mr-24 w-40">{props.h1}</h1>  <img  src={props.src} alt={props.name}></img> </div>
       <p className="w-[360px]">{props.desc}</p>
      <div className="flex justify-center items-center"> <button className=" text-white font-bold mt-4  rounded-md px-16 py-1 bg-emerald-500">{props.buttonname}</button>
       </div> 
        </div>
    )
}

export default RightCard
