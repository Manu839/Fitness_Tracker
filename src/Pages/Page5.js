
import { Link } from 'react-router-dom'
const Page5 = () => {
    return (
        <div className="w-[375px] relative rounded-[10px] -top-9 h-[800px] overflow-hidden text-left text-[12px] text-black font-montserrat">
            <div className="absolute top-[68px] left-[88px] text-[20px] font-semibold">
                What are your goals?
            </div>
            <div className="absolute top-[135px] ml-[16px] rounded-xl bg-[#F1F1F1] w-[343px] h-[50px]" />
            <div className="absolute  top-[153px] ml-[36px] font-semibold">
                Weight Loss
            </div>
            <div className="absolute top-[201px] ml-[16px] rounded-xl bg-[#F1F1F1] w-[343px] h-[50px]" />
            <div className="absolute top-[219px] ml-[36px] font-semibold">
                Muscle Gain
            </div>
            <div className="absolute top-[267px] ml-[16px] rounded-xl bg-[#F1F1F1] w-[343px] h-[50px]" />
            <div className="absolute top-[285px] ml-[36px] font-semibold">
                Flexibility and Mobility
            </div>
            <div className="absolute top-[333px] ml-[16px] rounded-xl bg-[#F1F1F1] w-[343px] h-[50px]" />
            <div className="absolute top-[351px] ml-[36px] font-semibold">
                General Fitness
            </div>
            <div className="absolute top-[399px] ml-[16px] rounded-xl bg-[#F1F1F1] w-[343px] h-[50px]" />
            <div className="absolute top-[417px] ml-[36px] font-semibold">
                Event - specific training
            </div>
            <div className="absolute top-[465px] ml-[16px] rounded-xl bg-[#F1F1F1] w-[343px] h-[50px]" />
            <div className="absolute top-[483px] ml-[36px] font-semibold">
                Mindfulness and Mental Health
            </div>
            <div className="absolute top-[149px] ml-[321px] w-[22px] h-[18px]">
                <input type="checkbox" className="absolute h-full w-full top-0 right-0 bottom-0 ml-0 rounded box-border border-[1px] border-solid border-cornflowerblue-600" />

            </div>
            <div className="absolute top-[215px] ml-[321px] w-[22px] h-[18px]">
                <input type="checkbox" className="absolute h-full w-full top-0 right-0 bottom-0 ml-0 rounded box-border border-[1px] border-solid border-cornflowerblue-600" />

            </div>
            <div className="absolute top-[281px] ml-[321px] w-[22px] h-[20px]">
                <input type="checkbox" className="absolute h-full w-full top-0 right-0 bottom-0 ml-0 rounded box-border border-[1px] border-solid border-cornflowerblue-600" />
            </div>

            <div className="absolute top-[347px] ml-[321px] w-[22px] h-[20px]">
                <input type="checkbox" className="absolute h-full w-full top-0 right-0 bottom-0 ml-0 rounded box-border border-[1px] border-solid border-cornflowerblue-600" />
            </div>

            <div className="absolute top-[413px] ml-[321px] w-[22px] h-[20px]">
                <input type="checkbox" className="absolute h-full w-full top-0 right-0 bottom-0 ml-0 rounded box-border border-[1px] border-solid border-cornflowerblue-600" />
            </div>
            <div className="absolute top-[479px] ml-[321px] w-[22px] h-[20px]">
                <input type="checkbox" className="absolute focus:#787878 h-full w-full top-0 right-0 bottom-0 ml-0 rounded box-border border-[1px] border-solid  border-cornflowerblue-600" />

            </div>
            <div className="absolute top-[665px] ml-[16px] rounded-xl [background:linear-gradient(270deg,_#7b91ff,_#95beff)] w-[343px] h-[50px]" />
            <div className="absolute top-[680px] left-[154px] text-base font-semibold text-white">
                <Link to="/PAGE6">Confirm</Link>
            </div>
        </div>
    );
};

export default Page5;
