import React from 'react'
import gif from "../images/gif.mp4"


function Gif() {
    const style = {
        div: " w-[900px] h-[1000px] bg-[#EEF4F9] mx-[350px] relative max-lg:w-[350px] max-lg:left-[30px] max-lg:h-[1200px]  max-lg:mx-[-0px] relative",
        h1: "text-[40px] font-bold text-[#153A5B] px-[150px] py-[50px] max-lg:text-[40px] max-lg:px-[10px]",
        span: "text-[30px] font-bold text-[#153A5B] px-[150px] max-lg:text-[25px] max-lg:px-[10px] max-lg:translate-y-[-70px]",
        p: "text-[20px] text-[#624E60] px-[150px] py-[50px] max-lg:px-[10px] max-lg:text-[15px]",
        li: "text-[23px] w-[250px] justify-center items-center flex h-[50px] font-bold text-white bg-[#153A5B] absolute bottom-[50px] left-[150px] hover:bg-white border-[3px] border-[#153A5B] hover:text-[#153A5B] cursor-pointer duration-500 max-lg:top-[830px] max-lg:left-[50px]"
    }
    return (
        <>
            <div className='max-lg:block max-lg:translate-y-[2500px]'>
                <div>
                    <div className={style.div}>
                        <video className='hidden max-lg:block p-[1px]' src={gif}></video>
                        <h1 className={style.h1}>LARQ Pitcher PureVis</h1>
                        <span className={style.span}>Nano Zero filter technology</span>
                        <p className={style.p}>Our innovative plant-based filters are <br /> independently tested to the highest standards <br /> to be effective against pollutants like lead* <br /> , chlorine, mercury, VOCs, cadmium, PFAS / <br /> PFOA*, pharmaceuticals*, particulates, and <br /> more. Learn more.</p>
                        <span className='text-[19px] px-[150px] absolute text-[#A5AAAD] top-[510px] max-md:hidden'>*with Advanced Filter</span> <br />
                        <span className="text-[30px] font-semibold translate-x-[150px] text-[#153A5B] absolute top-[460px] max-md:translate-x-[10px] max-md:py-[180px]">PureVis technology</span>
                        <p className="text-[20px]  text-[#153A5B] translate-x-[150px] py-[40px] max-md:translate-x-[10px] max-md:py-[10px] ">Proprietary PureVis™ technology <br /> improves the quality of your water by <br /> preventing bio -contaminant* growth. <br /> Learn more.</p>
                        <p className="text-[20px] text-[#B8BDC1] px-[150px] py-[-10px] max-md:hidden">*In lab testing, PureVis prevents and <br /> deactivates naturally occurring heterotrophic <br /> bacteria that may cause odor and impact the <br /> taste of water compared to non-UV treated <br /> water pitchers.</p>
                        <li className={style.li}>
                            Shop now
                        </li>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Gif