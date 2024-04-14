import React from 'react'
import google from '../images/4fe71ac3-522f-4167-8dbf-c6abefff4a92_1713031374188433633.svg'
import facebook from '../images/de9507d5-6585-4b61-8334-36dac8914bfa_1713031374188527348.svg'
import { Link } from 'react-router-dom'
function Page3() {
    return (
        <div className="w-[375px] relative -top-9 rounded-[10px] bg-[#FCFCFC] h-[800px] overflow-hidden text-left  text-[10px] text-gray-100 font-montserrat">
            <div className="absolute top-[68px] left-[16px] text-[20px] font-semibold font-roboto text-black">
                Create an account
            </div>
            <div className="absolute top-[431px] left-[46px] leading-[177.9%] text-[12px] font-medium text-cornflowerblue-200">
                <span className="text-[#808080]">By proceeding, I agree to all </span>
                <span className="underline">T&C</span>
                <span className="text-[#808080] whitespace-pre-wrap"> and </span>
                <span className="underline">Privacy Policy.</span>
            </div>
            <div className="absolute top-[431px] left-[16px] w-[22px] h-[18px]">
                <input type="checkbox" className="absolute h-full focus:bg-red w-full top-0 right-0 bottom-0 left-0 rounded box-border border-[1px] border-solid border-gray-100" />
            </div>
            <input placeholder='First Name' className="absolute pl-1 top-[135px] left-[16px] rounded-xl bg-[#F1F1F1] w-[343px] h-[50px] focus:border-none  border-none font-semibold">
            </input>
            <input placeholder='Last Name' className="absolute pl-1 focus:border-none border-none bg-[#F1F1F1] font-semibold  top-[209px] left-[16px] rounded-xl  w-[343px] h-[50px]"></input>
            <input placeholder='Email' className="absolute pl-1 focus:border-none border-none bg-[#F1F1F1]  font-semibold top-[283px] left-[16px] rounded-xl w-[343px] h-[50px]">
            </input>
            <input placeholder='Password' className="absolute pl-1 focus:border-none border-none bg-[#F1F1F1] font-semibold  top-[357px] left-[16px] rounded-xl  w-[343px] h-[50px]" >
            </input>

            <div className="absolute top-[756px] left-[115px] font-medium cursor-pointer text-black">
                <span>Already have an account? </span>
                <Link to="/PAGE4" className="hover:underline text-cornflowerblue-400">
                    Login
                </Link>
            </div>
            <div className="absolute top-[654.8px] left-[15.8px] box-border w-[155.5px] h-[0.5px] border-t-[0.5px] border-solid border-[#808080]" />
            <div className="absolute top-[654.8px] left-[201.8px] box-border w-[157.5px] h-[0.5px] border-t-[0.5px] border-solid border-[#808080]" />
            <div className="absolute top-[646px] left-[181px] font-medium text-black">
                Or
            </div>
            <div className="absolute top-[686px] left-[134px] rounded-lg box-border w-11 h-11 border-[1px] border-solid border-[#808080]" />
            <div className="absolute top-[686px] left-[196px] rounded-lg box-border w-11 h-11 border-[1px] border-solid border-[#808080]" />
            <img className="absolute top-[699px] left-[147px] w-[18px] h-[18px] overflow-hidden" alt="" src={google} />
            <img className="absolute h-[2.13%] w-[2.37%] top-[87.38%] right-[40.50%] bottom-[10.5%] left-[57.07%] max-w-full overflow-hidden max-h-full" alt="" src={facebook} />
            <div className="absolute top-[574px] left-[16px] rounded-xl [background:linear-gradient(270deg,_#7b91ff,_#95beff)] w-[343px] h-[50px] cursor-pointer" />
            <div className="absolute text-center top-[589px] left-[111px] text-base font-semibold text-white ">
                <Link to="/PAGE5">Create an Account</Link>
            </div>

        </div>
    )

}
export default Page3; 
