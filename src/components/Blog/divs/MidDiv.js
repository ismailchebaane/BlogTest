import React from 'react'
import MidCard from '../Cards/MidCard'

function MidDiv() {
    return (
        <div>
            <p className="text-zinc-600">1-20 of 84 Information Technology Jobs</p>
            <MidCard title="Senior Engineering Manager" view="180 Views " review="150 Review" hrs="1-3" salary="not specified" location="Sousse" desc="Lorem Ipsum is simply dummy text of the printing ." duration="2 Days Ago" />
            <MidCard title="Head-Cyper Security (VP/SVP)" view="320 Views " review="280 Review" hrs="1-6" salary="10k-15k" location="Monastir" desc="Lorem Ipsum is simply dummy text of the printing ." duration="6 Days Ago" />
            <MidCard title="Head-Cyper Security" view="320k Views " review="680 Review" hrs="5-8" salary="20k-45k" location="Mahdia" desc="Lorem Ipsum is simply dummy text of the printing ." duration="7 Days Ago" />
          
           
     <div className="flex justify-end mt-10 mb-10"><button className="disabled border text-emerald-400 rounded-md px-2 border-emerald-400 mx-4" >previous</button><button  className=" border text-white rounded-md px-2 shadow-lg bg-emerald-400 font-medium mx-1"> 1</button><button className="  text-emerald-500 rounded-md px-2 font-medium mx-1">2</button><button className="  text-emerald-500 rounded-md px-2 font-medium mx-1"> 3</button> <button className="  text-emerald-500 font-medium rounded-md px-2  mx-1">4</button><button className="  text-emerald-500 rounded-md px-2 font-medium  mx-1"> 5</button> <button className=" border text-emerald-500 rounded-md px-2 font-medium border-emerald-500 ml-2" >Next</button>  </div>
        </div>
    )
}

export default MidDiv
