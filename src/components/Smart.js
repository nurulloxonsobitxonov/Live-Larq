import React from 'react'
import video from "../images/video.mp4"

function Smart() {
    const style = {
        big_div: "my-[300px] mx-[650px] relative max-md:hidden",
        h1: "font-bold text-[65px] text-[#153A5B]",
        li: "w-[65px] flex h-[7.5px] bg-[#F3756D] translate-y-[50px] translate-x-[100px]",
        justify: "translate-y-[150px] translate-x-[-400px] flex w-[1200px] h-[600px]",
        video: " p-[1px]  max-md:my-[150px] max-md:w-[366px]",
        bdiv: "w-[600px] h-[580px] bg-[#EFF5F9]",
        h12: "font-bold text-[40px] text-[#153A5B] p-[80px]",
        li: "text-[23px] w-[250px] justify-center items-center flex h-[50px] font-bold text-white bg-[#153A5B] absolute bottom-[50px] left-[60px] hover:bg-white border-[3px] border-[#153A5B] hover:text-[#153A5B] cursor-pointer duration-500"
    }
    return (
        <>
            <div className={style.big_div}>
                <div>
                    <h1 className={style.h1}>A smart
                    </h1>
                    <span className='font-bold text-[65px] text-[#153A5B] max-md'>way to sip</span>
                </div>

                <li className={style.li}></li>
                <div className={style.justify}>
                    <div className={style.bdiv}>
                        <h1 className={style.h12}>LARQ Bottle PureVis</h1>
                        <span className='text-[25px] text-[#153A5B] font-bold absolute top-[180px] px-[80px] '>Brilliantly clean  water</span>
                        <p className='text-[20px] text-[#153A5B] py-[30px] px-[71px]'>Neutralizes up to 99%* of bacteria such as <br /> E.coli using PureVis technology. Learn more.</p>
                        <span className='font-bold text-[25px] text-[#153A5B] px-[70px]'>Self Cleaning & worry-free</span>
                        <p className='text-[19px] text-[#153A5B] px-[65px] py-[20px]'>Intelligently activates every 2 hours to keep <br /> your water and bottle stink-free..</p>
                        <li className={style.li}>
                            Shop now
                        </li>
                    </div>
                    <div>
                        <video className={style.video} src={video}></video>
                    </div>
                </div>
            </div>
            <div className='absolute left-[20px] translate-y-[1300px] hidden max-lg:block'>
                <h1 className='text-[40px] font-bold translate-y-[80px] text-[#153A5B] px-[80px]'>Smart way</h1>
                <li className="w-[65px] list-none h-[7.5px] bg-[#F3756D] translate-x-[140px] translate-y-[90px]"></li>

                <video className={style.video} src={video}></video>
                <div className='w-[350px] h-[600px] bg-[#EEF4F9] mx-[15px] my-[-150px]'>
                    <h1 className="font-bold text-[35px] text-[#153A5B] p-[30px]">LARQ Bottle <br /> PureVis</h1>
                    <span className='text-[21px] font-bold text-[#153A5B] px-[30px]'>Brilliantly clean water</span>
                    <p className='text-[18px] text-[#153A5B] py-[30px] px-[30px]'>Neutralizes up to 99%* of bacteria such as  E.coli using <br /> PureVis technology. Learn more.</p>
                    <span className='font-bold text-[20px] text-[#153A5B] px-[30px]'>Self Cleaning & worry-free</span>
                    <p className='text-[19px] text-[#153A5B] px-[30px] py-[20px]'>Intelligently activates every 2 hours to keep  your water and<br /> bottle stink-free..</p>
                    <li className="text-[18px] w-[200px] justify-center items-center flex h-[40px] font-bold text-white bg-[#153A5B] translate-x-[30px] hover:bg-white border-[3px] border-[#153A5B] hover:text-[#153A5B] cursor-pointer duration-500">
                        Shop now
                    </li>
                </div>
            </div>

        </>

    )
}

export default Smart