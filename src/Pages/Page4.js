import React from 'react'
import google from '../images/4fe71ac3-522f-4167-8dbf-c6abefff4a92_1713031374188433633.svg'
import facebook from '../images/de9507d5-6585-4b61-8334-36dac8914bfa_1713031374188527348.svg'
import eye from '../images/3e0c46cb-8f0b-42f1-8d11-bcd7081b61ac_1713031394362090059.svg'
import { Link } from 'react-router-dom'
function Page4() {
    return (
        <div className="relative -top-9 w-[375px] rounded-[10px] bg-[#FCFCFC] h-[800px] overflow-hidden text-left text-[12px] text-black font-montserrat">
            <div className="absolute top-[68px] left-[16px] text-[20px] font-semibold font-roboto">
                Welcome Back
            </div>
            <input type='email' placeholder='Email' className="absolute top-[135px] left-[16px] font-semibold bg-[#F1F1F1] border-none  text-[#808080] rounded-xl w-[343px] h-[50px] pl-1">
            </input>
            <input type='password' placeholder='Password' className="absolute top-[209px] left-[16px] font-semibold bg-[#F1F1F1] border-none text-[#808080] rounded-xl w-[343px] h-[50px] pl-1">
            </input>
            <div className="absolute top-[279px] left-[21px] hover:underline font-medium text-[#808080]">
                Forgot your password?
            </div>
            <div className="absolute top-[756px] left-[47px] hover:underline font-medium cursor-pointer">
                <span>Don't have an account yet? </span>
                <Link to="/PAGE3" className="text-cornflowerblue-300">Create an account</Link>
            </div>
            <div className="absolute top-[574px] left-[16px] rounded-[20px] [background:linear-gradient(270deg,_#7b91ff,_#95beff)] w-[343px] h-[50px]" />
            <div className="absolute top-[654.8px] left-[15.8px] box-border w-[155.5px] h-[0.5px] border-t-[0.5px] border-solid border-[#808080]" />
            <div className="absolute top-[654.8px] left-[201.8px] box-border w-[157.5px] h-[0.5px] border-t-[0.5px] border-solid border-[#808080]" />
            <div className="absolute top-[646px] left-[181px] font-medium">
                Or
            </div>
            <img className="absolute top-[226px] left-[327px] w-4 h-4 overflow-hidden" alt="" src={eye}
            />
            <div className="absolute top-[589px] left-[158px] text-base font-semibold text-white">
                <Link to="/PAGE5">Sign In</Link>
            </div>
            <div className="absolute top-[686px] left-[134px] rounded-lg box-border w-11 h-11 border-[1px] border-solid border-[#808080]" />
            <div className="absolute top-[686px] left-[196px] rounded-lg box-border w-11 h-11 border-[1px] border-solid border-[#808080]" />
            <img className="absolute top-[699px] left-[147px] w-[18px] h-[18px] overflow-hidden" alt="" src={google} />
            <img className="absolute h-[2.13%] w-[2.37%] top-[87.38%] right-[40.56%] bottom-[10.5%] left-[57.07%] max-w-full overflow-hidden max-h-full" alt="" src={facebook} />
        </div>
    )
}

export default Page4