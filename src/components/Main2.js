import React, { useRef, useState } from 'react'
import strategist from "../images/strategist.jpg"
import o from "../images/o.jpg"
import stars from "../images/stars.jpg"
import digital from "../images/digital.jpg"
import wire from "../images/wire.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Style.css"


// import required modules
import { Navigation } from "swiper";


function Main2() {

    const style = {
        main: "my-[90px] grid grid-cols-5 gap-1 font-semibold max-lg:hidden",
        strategist: "w-[120px] h-[30px] mx-[70px] my-[20px] max-md:w-[30px] h-[30px]",
        o: "w-[70px] mx-[70px] my-[35%] ",
        p1: " text-[#335985] text-[22px] translate-x-[30px] max-lg:text-[20px] translate-x-[0]",
        p2: "text-[#153A5B] text-[21px]",
        p3: "px-[70px] text-[#5982A5] text-[26px] max-md:px-[0px]",
        p4: "text-[#5982A5] text-[22px]",
        p5: "text-[#5982A5] text-[20px] ",
        div1: "mx-[30px]",
        stars: "w-[250px] mx-[30px] my-[-30px]",
        digital: "mx-[-20px] my-[50px]",
        wire: "w-[70px] mx-[70px] my-[70px]",
        slide: "w-[10px] my-[40px] hidden max-lg:block"
    }

    return (
        <>
            <div>
                <div className={style.main}>
                    <div className={style.div1}>
                        <p className={style.p1}>
                            “What’s the Next Status <br /> Water Bottle? Three of <br /> our experts named the <br /> LARQ bottle as one to <br /> watch.”
                        </p>
                        <img className={style.strategist} src={strategist} alt="" />

                    </div>
                    <div className='mx-[40px]'>
                        <p className={style.p2}>
                            “The result is that every <br /> <span className='px-[20px]'> glass of water tastes</span> <br /><span className='px-[40px]'> crisp and fresh.”</span>
                        </p>
                        <img className={style.o} src={o} alt="" />
                    </div>
                    <div>
                        <img className={style.stars} src={stars} alt="" />
                        <span className={style.p3}>Based on 6394 <br /> <span className='px-[100px]'> reviews</span></span> <br />
                        <a className='text-[22px] text-[#757575] mx-[78px] border-[#757575] border-b-2' href="https://www.livelarq.com/shop/larq-bottle-purevis/reviews">See all Reviews</a>
                    </div>
                    <div>
                        <p className={style.p4}>
                            “LARQ's PureVis water <br /> <span>pitcher erased my fears</span><br />  <span className='px-[10px]'>about drinking water</span><br /> <span className='px-[40px]'>from the tap.”</span>
                        </p>
                        <img className={style.digital} src={digital} alt="" />
                    </div>
                    <div>
                        <p className={style.p5}><span> “Go ahead, back-wash </span> <br /><span >away. Your dirty mouth-</span> <br /> <span> stink will be neutralized</span><br /> <span className='px-[50px]'> soon enough.”</span></p>
                        <img className={style.wire} src={wire} alt="" />
                    </div>
                    <div className='w-[100%] h-[2px] text-[#F0F0F0]'></div>

                </div>
            </div>


            <Swiper navigation={true} modules={[Navigation]} className="hidden max-lg:block w-[100px]">
                <SwiperSlide>
                    <p className={style.p1}>
                        Time's Best Inventions of 2022
                    </p>

                </SwiperSlide>
                <SwiperSlide>
                    <p className='text-[#153A5B]'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, eligendi? <br /> Inventore reprehenderit totam sunt, <br /> illo voluptate odit laudantium itaque eum!
                    </p>
                </SwiperSlide>
                <SwiperSlide><p className='text-[#153A5B]'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, eligendi? <br /> Inventore reprehenderit totam sunt, <br /> illo voluptate odit laudantium itaque eum!
                </p></SwiperSlide>
                <SwiperSlide><p className='text-[#153A5B]'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, eligendi? <br /> Inventore reprehenderit totam sunt, <br /> illo voluptate odit laudantium itaque eum!
                </p></SwiperSlide>
                <SwiperSlide><p className='text-[#153A5B]'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, eligendi? <br /> Inventore reprehenderit totam sunt, <br /> illo voluptate odit laudantium itaque eum!
                </p></SwiperSlide>
                <SwiperSlide><p className='text-[#153A5B]'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, eligendi? <br /> Inventore reprehenderit totam sunt, <br /> illo voluptate odit laudantium itaque eum!
                </p></SwiperSlide>
                <SwiperSlide><p className='text-[#153A5B]'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, eligendi? <br /> Inventore reprehenderit totam sunt, <br /> illo voluptate odit laudantium itaque eum!
                </p></SwiperSlide>

            </Swiper>


        </>

    )
}

export default Main2