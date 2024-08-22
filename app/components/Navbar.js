const Navbar = () => {
    return(
        <div className="grid grid-cols-2 lg:grid-cols-3 bg-lightGrey border-b border-[#2f2f2f]">
            {/* logo code */}
            <div className="flex flex-row ml-2">
                <img src="logo.png"className="w-10 h-10 mt-3 -mr-2"></img>
                <img src="logo-word.png"className="h-16"></img>
            </div>

            {/* Search bar code */}

    <div className="hidden lg:flex">
      <div className="absolute mt-3">
        <div className="absolute inset-y-1 end-0 flex items-center ps-8 pointer-events-auto">
          <svg class="w-4 h-4 mr-4 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="search" className="block w-[30vw] p-2.5 text-md text-gray-100 border hover:border-gray-400 rounded-3xl bg-[#2f2f2f]" placeholder="Search"/>
      </div>
    </div>

    {/* log in button*/}

    <div className="flex flex-row justify-end">
        <button className="bg-pink px-6 my-2.5 rounded-md font-text-bold">Log in</button>
        <img src="icons/more.png" className="my-2"></img>
    </div>

        </div>
    )
}

export default Navbar