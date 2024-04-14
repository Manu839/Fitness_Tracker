import React from 'react'
import { Link } from 'react-router-dom'

import caution from '../images/86d08b7d-6029-4e4d-872d-1f9727426478_1713031382744410081.svg'
import back from '../images/270b85f5-2644-4137-b8cd-e8d028a8b26a_1713031382744010593.svg'
import img1 from '../images/330c80d6-e9df-4aaf-9834-b68c9e767963_1713031382744489039.png'
import img2 from '../images/fcabd3b5-3e01-41a7-82f1-eefb23cd7752_1713031382744571538.png'
import img3 from '../images/c158122d-5d2a-4f6e-82f7-636a096ec31b_1713031382743783169.png'
import search from '../images/de95e4a0-6039-41d9-87b3-8f009dcf4126_1713031382744715927.svg'
import tab from '../images/image.png'
import testimg from '../images/testimg.svg'
function Page6() {
    return (
        <div className="w-[375px] relative rounded-[10px] bg-[#FCFCFC] h-[800px] overflow-hidden -top-9 text-left text-[12px] text-black font-montserrat">
            <div className="absolute top-[647px] left-[16px] rounded-xl bg-cornflowerblue-800 shadow-md w-[343px] h-[124px]" />
            <img className="absolute top-[663px] left-[247px] rounded-[50%] w-[100px] h-[100px] object-cover" alt="" src={img3} />
            <div className="absolute top-[68px] left-[101px] text-[20px] font-semibold text-center">
                Workout Tracker
            </div>
            <div className="absolute top-[392px] left-[16px] text-base font-semibold">
                Upcoming Workout
            </div>
            <div className="absolute top-[611px] left-[17px] text-base font-semibold">
                <Link to="/PAGE7">What Do You Want to Train</Link>
            </div>
            <Link to="/PAGE5">
                <img className="absolute top-[70px] left-[16px] rounded-[3px] w-5 h-5 overflow-hidden" alt="" src={back} /></Link>
            <div className="absolute top-[172.5px] left-[16px] w-[343px] h-[90px] flex flex-col items-start justify-start cursor-pointer text-[12.2px]">
                <div className="w-[343px] flex flex-col items-start justify-start">
                    <div className="w-[328.8px] relative h-[90.3px]">
                        <img alt='' src={testimg}></img>
                    </div>
                </div>
            </div>
            <div className="absolute top-[287.3px] left-[16px] rounded-[20px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 backdrop:blur-sm h-[50px] text-[12.6px] ">
                <div className="absolute top-[9.7px] left-[37px] font-medium inline-block w-[281px]">You've burned fewer calories than yesterday. Time to get moving! </div>
                <div className="absolute top-[13.2px] left-[305.3px] text-[13.2px] text-right inline-block w-[12.2px]">
                    <b></b>
                </div>
                <img className="absolute top-[15.7px] left-[9px] w-5 h-5 overflow-hidden" alt="" src={caution} />
            </div>
            <div className="absolute top-[143px] left-[232.8px] text-[11.2px]">
                less then 320cal
            </div>
            <div className="absolute top-[143px] left-[137.1px] text-[11.2px]">
                Good job
            </div>
            <div className="absolute top-[428px] left-[16px] rounded-xl bg-white shadow-md w-[343px] h-[75px]" />
            <div className="absolute top-[519px] left-[16px] rounded-xl bg-white shadow-md w-[343px] h-[75px]" />
            <div className="absolute top-[394px] left-[300px] font-medium text-[#808080]">
                See more
            </div>
            <div className="absolute top-[444px] left-[91px] font-medium">
                Full Body Workout
            </div>
            <div className="absolute top-[539px] left-[91px] font-medium">
                Upper Body Workout
            </div>
            <div className="absolute top-[663px] left-[32px] font-medium">
                Full Body Workout
            </div>
            <div className="absolute top-[687px] left-[32px] text-[10px] font-medium">
                Arms
            </div>
            <div className="absolute top-[707px] left-[32px] text-[10px] font-medium">
                Chest
            </div>
            <div className="absolute top-[467px] left-[91px] text-[10px] font-medium text-[#808080]">
                Today 3pm
            </div>
            <div className="absolute top-[562px] left-[91px] text-[10px] font-medium text-[#808080]">
                4 Feb, 3:30 pm
            </div>
            <div className="absolute top-[456px] left-[303px] w-10 h-5">
                <label class="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" checked />
                    <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                </label>
            </div>
            <div className="absolute top-[547px] left-[303px] w-10 h-5">
                <label class="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" checked />
                    <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                </label>
            </div>
            <img className="absolute top-[441px] left-[32px] rounded-[50%] w-[50px] h-[50px] object-cover" alt="" src={img1} />
            <img className="absolute top-[532px] left-[32px] rounded-[50%] w-[50px] h-[50px] object-cover" alt="" src={img2} />
            <div className="absolute top-[724px] left-[0px] bg-white w-[375px] h-[76px]" />
            <img className="absolute h-[3.4%] w-[84.53%] top-[93.26%] right-[7.73%] bottom-[3.34%] left-[7.73%] max-w-full overflow-hidden max-h-full" alt="" src={tab} />
            <img className="absolute top-[699px] left-[156px] w-[63px] h-[63px]" alt="" src={search} />
        </div>
    )
}

export default Page6