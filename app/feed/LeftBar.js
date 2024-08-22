import React from "react";

const LeftBar = () => {
    return (
        <div className="flex flex-col pt-4 border-t border-[#2f2f2f]">
            <div className="flex flex-row items-center my-2 ml-5">
                <img src="icons/home.png" className="w-6 h-7 mr-4"></img>
                <p className="text-pink font-text-bold text-lg">For You</p>
            </div>
            <div className="flex flex-row items-center my-2 ml-5">
                <img src="icons/explore.png" className="w-6 h-6 mr-4"></img>
                <p className="text-white font-text-bold text-lg">Explore</p>
            </div>
            <div className="flex flex-row items-center my-2 ml-5">
                <img src="icons/people.png" className="w-6 h-6 mr-4"></img>
                <p className="text-white font-text-bold text-lg">Following</p>
            </div>
            <div className="flex flex-row items-center my-2 ml-5">
                <img src="icons/live.png" className="w-6 h-6 mr-4"></img>
                <p className="text-white font-text-bold text-lg">Live</p>
            </div>
            <div className="flex flex-row items-center my-2 ml-5">
                <img src="icons/profile.png" className="w-6 h-6 mr-4"></img>
                <p className="text-white font-text-bold text-lg">Profile</p>
            </div>
            <p className="text-gray-500 ml-4 my-4 md:text-lg lg:text-lg mr-3">Log in to follow creators, like videos, and view comments.</p>
            <button className="bg-lightGray border-2 border-pink text-pink rounded-md text-lg font-display-medium ml-4 mr-8 py-2">Log in</button>

            <hr className="my-4 mx-2 bg-[#2f2f2f] h-px"></hr>
            <a href="https://effecthouse.tiktok.com/download?utm_campaign=ttweb_entrance_v1&utm_source=tiktok_webapp_main" class="relative block my-2 ml-2">
                <img src="logo-yellow.png" alt="logo" className="w-full h-auto"/>
                    <p className="absolute inset-0 flex items-center justtify-center text-[#FFF8C4] font-display-medium ml-16 text-[14px]">Create TikTok effects, get a reward</p>
            </a>
            
            <p className="font-display-bold text-md text-[#898989] mb-2 mt-4 ml-2">Company</p>
      <p className="font-display-bold text-md text-[#898989] mb-2 ml-2">Program</p>
      <p className="font-display-bold text-md text-[#898989] mb-2 ml-2">Terms & Conditions</p>
      <p className="font-display-regular text-sm text-[#898989] mb-2 ml-2">&copy; 2024 TikTok</p>

        </div>
    )
}
export default LeftBar