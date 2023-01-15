import React from 'react'
import RightDiv from './divs/RightDiv';
import LeftDiv from './divs/LeftDiv';
import MidDiv from './divs/MidDiv';

function Blog() {
    return (
        <div className=" flex justify-around bg-slate-100 pt-14 pl-6 w-full h-[1000px]">
       <LeftDiv />
      
        
        <MidDiv />   
        <RightDiv /> 
        </div>
    )
}

export default Blog
