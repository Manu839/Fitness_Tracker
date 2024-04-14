
import progress from '../images/progress1.svg'
import img from '../images/first_page.png'
import { Link } from 'react-router-dom'
function Page1() {
    return (
        <>
            <div className='bg-[#FCFCFC] h-[800px] w-[375px] '>
                <div>
                    <Link to="/PAGE3" className='w-[36px] h-[20px] ease-out duration-[917ms] mt-[22px] leading-[19.5px] ml-[323px] text-[#9FB2FF] hover:underline font-[500] size-[16px]'>Skip</Link>
                </div>
                <div className='items-center justify-center content-center text-center'>
                    <img className=' mt-[68px] h-[282px] w-[282px] ' src={img} alt="runing_man"></img>
                </div>
                <div className='w-[160px] h-[24px] mt-[85px] leading-[24.38px] ml-[16px] text-[#2C2B2B]  font-[600] size-[20px]'>
                    Track Your Goal
                </div>
                <div className='w-[343px] h-[60px] mt-[15px] leading-[19.5px] ml-[16px] text-[#787878] font-[500] size-[16px]'>
                    Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals
                </div>
                <div className='mt-[68px] ml-[299px] mr-[16px]'>
                    <Link to="/PAGE2"><img className='w-[60px] h-[60px]' src={progress} alt='progress'></img>
                    </Link>
                </div>
            </div >
        </>
    );
}

export default Page1;