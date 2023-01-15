import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Slider } from '@mui/material';
function LeftDiv() {
    return (
        <div className=' bg-white h-max w-80 rounded-sm shadow-md  border border-md border-zinc-200'>
           <h1 className='py-8 px-8 h-max font-bold'><span className=""> <FilterListIcon ></FilterListIcon> </span> All Filters   </h1>
            <div className='rounded-sm shadow-sm  bb-2 border-md border-zinc-300 mb-4'>
            <div className="flex justify-between  ">
                <h1 className="ml-10 font-bold text-lg  ">Freshness</h1>
       <span className="mr-8"> <KeyboardArrowDownIcon /></span>  
            </div>
    <ul className="ml-10 pb-4 mt-2">
  <li className="flex"><input type="radio" className="form-check-input mx-4 " />  <p className="  text-[16px]  text-zinc-400">Last 1 day</p></li>
  <li className="flex"><input type="radio" className="form-check-input mx-4 " />  <p className="  text-[16px]  text-zinc-400">Last 3 day</p></li>
  <li className="flex"><input type="radio" className="form-check-input mx-4 " />  <p className="  text-[16px]  text-zinc-400">Last 7 day</p></li>
  <li className="flex"><input type="radio" className="form-check-input mx-4 " />  <p className="  text-[16px]  text-zinc-400">Last 15 day</p></li>
  
    </ul>



            </div>
            <div className='rounded-sm shadow-sm  bb-2 border-md border-zinc-300 mb-4'>
            <div className="flex justify-between  ">
                <h1 className="ml-10 font-bold text-lg  ">Job Type</h1>
       <span className="mr-8"> <KeyboardArrowDownIcon /></span>  
            </div>
    <ul className="ml-10 pb-4 mt-2">
  <li className="flex"><input type="checkbox" className="form-check-input mx-4 " />  <p className="  text-[16px]  text-zinc-400">Full-time</p></li>
  <li className="flex"><input type="checkbox" className="form-check-input mx-4 " />  <p className="  text-[16px]  text-zinc-400">Part-time</p></li>
  <li className="flex"><input type="checkbox" className="form-check-input mx-4 " />  <p className="  text-[16px]  text-zinc-400">Contract</p></li>
  <li className="flex"><input type="checkbox" className="form-check-input mx-4 " />  <p className="  text-[16px]  text-zinc-400">Internship</p></li>
  
    </ul>

     </div>



            <div className='rounded-sm shadow-sm  bb-2 border-md border-zinc-300 mb-4'>
            <div className="flex justify-between  ">
                <h1 className="ml-10 font-bold text-lg  ">Experience</h1>
       <span className="mr-8"> <KeyboardArrowDownIcon /></span>  
            </div>
    <div className=" pb-4 mx-14 mt-2">
    <Slider
  aria-label="Custom marks"
  defaultValue={5}
  step={1}
  valueLabelDisplay="auto"
  marks
  min={1}
  max={10}

  color="success"
/><div className="flex mt-[-10px] justify-between">
<span className="text-zinc-500">0 Yrs</span>
<span className="text-zinc-500">10 Yrs</span></div>
   </div>



            </div>


            <div className='rounded-sm pb-28 mb-4'>
            <div className="flex justify-between  ">
                <h1 className="ml-10 font-bold text-lg  ">Location</h1>
       <span className="mr-8"> <KeyboardArrowDownIcon /></span>  
            </div>
    <ul className="ml-10 pb-4 mt-2">
  <li className="flex"><input type="checkbox" className="form-check-input mx-4 " />  <p className="  text-[16px]  text-zinc-400">Al-Monastir</p></li>
  <li className="flex"><input type="checkbox" className="form-check-input mx-4 " />  <p className="  text-[16px]  text-zinc-400">Sousse</p></li>
  <li className="flex"><input type="checkbox" className="form-check-input mx-4 " />  <p className="  text-[16px]  text-zinc-400">Sfax</p></li>
  <li className="flex"><input type="checkbox" className="form-check-input mx-4 " />  <p className="  text-[16px]  text-zinc-400">Tunis</p></li>
  
    </ul>

     </div>

        </div>
    )
}

export default LeftDiv
