import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import HistoryIcon from '@mui/icons-material/History';
import ReplyIcon from '@mui/icons-material/Reply';
function MidCard(props) {
    return (
        <div className="bg-white px-8 py-6 shadow-md rounded-md    w-max h-max mt-6">
           <div className='flex justify-between'> <h1 className="font-bold text-[18px]">{props.title}</h1> <div className="flex"> <div className="mr-2 flex"><VisibilityIcon fontSize="small" /> <p className="ml-1 text-[13px]">{props.view}</p>  </div> <div className='flex'><FavoriteBorderIcon fontSize="small" />  <p className="ml-1 text-[13px]">Save</p></div> </div> </div>
        <div className="flex my-2"> <h1 className="font-medium">Captiosus axons</h1>   <span className="ml-4 mr-2">⭐</span> <p className="font-normal text-zinc-700">({props.review})</p></div>
        <div className="flex"> <div> <div  className=" flex mr-4"> <BusinessCenterIcon  fontSize="small" /><span className="ml-1">{props.hrs} hrs</span> </div>    </div>$ <h1 className="ml-1"> {props.salary}</h1>  <div className="flex ml-4"> <LocationOnIcon fontSize="small" /> <p className="ml-2"> {props.location}</p></div>  </div>
        <div className="my-2 flex"><span className="mr-2"><DescriptionIcon fontSize="small" /></span><p>{props.desc} </p> </div>
        <div className="w-full ">   
      <ul className="flex justify-items ">
        <li className="mx-2"> <div className="bg-gray-300 rounded-md px-4 ">Java</div> </li>
        <li className="mx-2"> <div className="bg-gray-300 rounded-md px-4 ">Travel</div> </li>
        <li className="mx-2"> <div className="bg-gray-300 rounded-md px-4 ">React</div> </li>
        <li className="mx-2"> <div className="bg-gray-300 rounded-md px-4 ">Nodejs</div> </li>
        <li className="mx-2"> <div className="bg-gray-300 rounded-md px-4 ">Product</div> </li>
      
      </ul>

        </div>
        <div className="flex mt-4 justify-between"><div className="bg-gray-300 rounded-md pr-2"><span className="mx-2"><HistoryIcon fontSize="small" /></span> {props.duration}</div>
         <div className=""><button className="border text-emerald-500 font-medium shadow-md border-emerald-500 rounded-md px-4"><span><VisibilityIcon fontSize="small" /></span> View</button>   <button className="border text-white font-medium shadow-md bg-emerald-500  rounded-md px-4"><span className="mr-1"><ReplyIcon fontSize='small' /></span>  Apply </button> </div>   </div>
        </div>
    )
}

export default MidCard
