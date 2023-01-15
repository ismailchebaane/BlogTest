import React from 'react'

function NavBar() {
    return (
        <div>
            
<div class="flex flex-wrap  ">
  <section class="relative w-full mx-auto " >
     
    <nav class="flex justify-between shadow-md  bg-gray-white text-black w-screen">
      <div class="px-5 xl:px-12 py-6 flex w-full items-center">
        <a class="text-3xl font-bold font-heading" href="#">
        Logo
        </a>
   
        <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><a class="hover:underline" href="#">Home</a></li>
          <li><a class="hover:underline" href="#">Jobs</a></li>
          <li><a class="hover:underline" href="#">About Us</a></li>
          <li><a class="hover:underline" href="#">Contact </a></li>
        </ul>
      

        <div class="hidden xl:flex items-center space-x-5 items-center">
          <a class="hover:text-gray-200" href="#">
          <h1 className="px-2 py-1 text-md font-bold"> Sign in
           </h1> 
          </a>
          <a class="flex items-center bg-gray-800 rounded-md hover:bg-gray-200" href="#">
            <h1 className="px-2 py-1 text-md text-white font-bold"> Create account
           </h1> 
          </a>
        
        
          
        </div>
      </div>
    
      <a class="xl:hidden flex mr-6 items-center" href="#">
       
       
      </a>
      <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </a>
    </nav>
    
  </section>
</div>




        </div>
    )
}

export default NavBar
