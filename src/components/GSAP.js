import React from 'react'
import cloud1 from "../images/cloud1.jpg"
import cloud2 from "../images/cloud2.jpg"
import cloud3 from "../images/cloud3.jpg"
import bottle from "../images/bottle.jpg"
import city from "../images/city.jpg"
import gifcha from "../images/bottle.webp"
import Slider from "react-slider"


function GSAP() {





    const style = {
        div: "mx-[200px] my-[200px]",
        div2: "w-[60%] h-[370px] bg-[#F5F9FC] translate-y-[300px] flex justify-center items-center flex-col translate-x-[320px]",
        h1: "text-[30px] font-bold text-[#153A5B]",
        input: "w-[200px] h-[65px] border-[2px] border-[#CCCCCC] text-[25px] flex justify-center items-center  outline-none ",
        li: "list-none w-[400px] h-[65px] bg-[#153A5B] mx-[50px] text-white text-[23px] font-bold flex justify-center items-center cursor-pointer"
    }
    return (
        <>
            <div className='max-lg:hidden'>
                <div>
                    <div className={style.div}>
                        <div className='mx-[200px]'>
                            <img className='cloud1' src={cloud1} alt="" />
                            <img className='cloud2' src={cloud2} alt="" />
                            <img className='cloud3' src={cloud3} alt="" />
                        </div>
                        <div>
                            <img className='my-[30px] max-md:w-[100px]  max-md:h-[200px]' src={bottle} alt="" />
                            <img className='mx-[600px] my-[-300px]' src={city} alt="" />
                        </div>


                    </div>
                    <div>
                        <p className='translate-y-[150px] absolute left-[350px] text-[#153A5B] text-[50px] font-bold '>One million single use plastic bottles <br /> <span className='px-[90px]'> are thrown out every minute!</span></p>

                    </div>

                </div>
                <div className={style.div2}>
                    <h1 className={style.h1}>Measure your impact on the world and your wallet</h1>
                    <span className='text-[#153A90] text-[25px]'>Enter how many single-use plastic bottles you use weekly.</span>
                    <div className='flex translate-y-[50px]'>
                        <input className={style.input} type="text" placeholder='e.g. 5' />
                        <li className={style.li}>Measue my Impact</li>
                    </div>
                </div>

                <img className='translate-x-[650px] translate-y-[400px]' src={gifcha} alt="" />
                <p className='px-[600px] translate-y-[450px] text-[#5F6A74]'>The average person uses 3 single-use bottles per week!</p>
            </div>
            <div className='hidden max-lg:block translate-y-[3200px]'>
                <div>
                    <div className='absolute left-[100px] translate-y-[-500px]'>
                        <img className='media_cloud1 w-[40px] my-[-80px]' src={cloud1} alt="" />
                        <img className='media_cloud2 w-[50px] absolute top-[30px]' src={cloud2} alt="" />
                        <img className='media_cloud3 w-[30px]' src={cloud3} alt="" />
                    </div>
                    <div className=''>
                        <img className='w-[200px] h-[100px] translate-x-[-100px] translate-y-[-400px]' src={bottle} alt="" />
                        <img className='w-[300px] h-[150px] translate-x-[80px] translate-y-[-550px]' src={city} alt="" />
                    </div>
                    <p className='translate-y-[-500px] absolute left-[20px] text-[#153A5B] text-[24px] font-bold '>One million single use plastic <br /> bottles  are thrown out every  </p>
                </div>
                <div className='relative w-[300px] h-[300px] bg-[#F5F9FC] absolute left-[40px] translate-y-[-420px]'>
                    <h1 className='text-[#153A90] text-[20px] py-[20px] px-[35px] font-bold'>Measure your impact on <br /><span className='absolute left-[27px]'>the world and your wallet</span> </h1>
                    <p className='text-[#153A90] text-[15px]  py-[20px] px-[60px]'>Enter how many single-use <br /> <span className='absolute left-[55px]'>plastic bottles you use weekly</span> </p>
                    <input className='w-[200px] m-[40px]' type="range" />


                    <li className='list-none w-[230px] h-[45px] bg-[#153A5B] mx-[30px] text-white text-[18px] font-bold flex  justify-center items-center cursor-pointer'>
                        Measue my Impact
                    </li>

                </div>
                <div className='translate-y-[-380px]'>
                    <img className='w-[150px] h-[20px] absolute left-[110px]' src={gifcha} alt="" />
                    <p className='text-[18px] text-[#5F6A74] absolute left-[40px] translate-y-[30px]'>
                        The average person uses 3 single-use <br /> <span className='absolute left-[80px]'>bottles   per  week!</span>
                    </p>
                </div>
            </div>
        </>

    )
}

export default GSAP