import React from 'react'
import RightCard from '../Cards/RightCard'

function RightDiv() {
    return (
        <div className='w-max'>
           <RightCard h1="Get Personalised Job Recommendations" name="one" desc="Registering gives you the benefit to browse &  apply variety of jobs based on your preferences" buttonname="Register Now" /> 
           <RightCard h1="About Producer of this App" name="two" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " buttonname="See More" /> 
        </div>
    )
}

export default RightDiv
