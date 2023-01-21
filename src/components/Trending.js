import React, { useState } from 'react'
import black from "../images/black.jpg"
import white from "../images/white.jpg"
import blue from "../images/blue.jpg"
import { Link } from "react-router-dom"



function Trending() {






    const style = {
        h1: "text-[#153A5B] font-bold text-[60px] px-[630px] max-md:text-[35px] max-md:translate-x-[-550px] max-md:translate-y-[-70px]",
        li: "w-[65px] flex h-[7.5px] bg-[#F3756D] mx-[48%] my-[27px] max-md:w-[45px] max-md:translate-x-[-590px] max-md:translate-y-[-70px]",
        big_div: " grid grid-cols-3 my-[140px] w-[95pc] max-md:mx-[-0px]  ",
        div1: " h-[400px] w-[300px] mx-[80px] my-[60px] m",
        div2: "w-[300px] mx-[120px] max-md:w-[200px] max-md:h-[200px] max-md:translate-x-[-56px]",
        div3: "w-[500px] translate-y-[-120px] max-md:hidden",
        bigger_div: "w-[450px] h-[450px] my-[-30px] mx-[30px] hover:bg-[#A1B0BD] duration-500 relative group truncate max-md:w-[270px] ",
        bigger_div2: "w-[450px] h-[450px] my-[-30px] mx-[30px] hover:bg-[#A1B0BD] duration-500 relative group truncate  ",
        ldiv: "absolute top-[140px]",
        select_h1: "text-[#E1E5EA] text-[20px] font-bold translate-x-[-230px] translate-y-[270px] group-hover:translate-x-[70px] duration-500",
        size1: "w-[130px] h-[70px] px-[36px] py-[10px] border-white bg-black  border-[3px] translate-x-[-30px] font-bold text-[25px] text-white justify-center items-center flex hidden group-hover:block duration-500 hover:bg-[#ffffff] hover:text-[#153A5B] cursor-pointer hover:border-[3px] hover:border-[#153A5B] ",
        size2: "w-[130px] px-[36px] py-[10px] h-[70px] border-white text-white   border-[3px] translate-x-[75px] bg-black font-bold text-[25px]  hidden  group-hover:block duration-500 hover:bg-[#ffffff] hover:text-[#153A5B] cursor-pointer hover:border-[3px] hover:border-[#153A5B] ",

    }

    return (
        <>
            <div className='relative max-lg:hidden'>
                <h1 className={style.h1}>Trending now</h1>
                <li className={style.li}></li>
                <div className={style.big_div}>
                    <div className={style.bigger_div}>
                        <div className={style.div1}>
                            <img src={blue} alt="" />

                            <div className={style.ldiv}>
                                <h1 className={style.select_h1}>Select size:</h1>
                                <div className='flex mx-[-20px] my-[40px]'>
                                    <h1 className={style.size1}><Link to="/shop">17 oz</Link> </h1>
                                    <h1 className={style.size2}> 25 oz</h1>
                                </div>

                            </div>


                        </div>


                    </div>
                    <div className='top-[700px] absolute left-[150px]'>
                        <p className='text-[#4B6881] text-[22px] max-md:hidden'>LARQ Bottle PureVis™</p>
                        <h1 className='text-[#153A5B] text-[30px] px-[10px] font-bold max-md:hidden'>Monaco Blue</h1>
                    </div>
                    <div className={style.bigger_div2}>
                        <div className={style.div2}>
                            <img className="w-[550px] my-[40px] mx-[-38px]" src={black} alt="" />
                            <div className={style.ldiv}>
                                <h1 className={style.select_h1}>Select size:</h1>
                                <div className='flex mx-[-20px] my-[40px]'>
                                    <h1 className={style.size1}><Link to="/shop2">17 oz</Link> </h1> <h1 className={style.size2}>25 oz</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='top-[700px] absolute left-[700px] max-md:hidden'>
                        <p className='text-[#4B6881] text-[22px]'>LARQ Bottle Filtered</p>
                        <h1 className='text-[#153A5B] text-[30px] px-[0px] font-bold'>Obsidian Black</h1>
                    </div>
                    <div className="w-[550px] h-[450px] my-[-30px] hover:bg-[#A1B0BD] duration-500 max-md:hidden">
                        <Link to="/shop3">
                            <div className={style.div3}>

                                <img className='w-[450px] h-[400px] translate-y-[150px] mx-[55px] justify-center items-center flex' src={white} alt="" />
                            </div>
                        </Link>

                    </div>
                    <div className='top-[700px] absolute right-[250px] max-md:hidden'>
                        <p className='text-[#4B6881] text-[22px]'>LARQ Bottle Filtered</p>
                        <h1 className='text-[#153A5B] text-[30px] px-[0px] font-bold '>Obsidian White</h1>
                    </div>

                </div>
            </div>
            <div className='hidden max-lg:block my-[400px] hidden max-lg:block '>
                <h1 className="text-[35px] text-[#153A5B] font-bold absolute left-[86px] translate-y-[-40px]">Trending now</h1>
                <div className="flex flex-col translate-x-[70px] translate-y-[30px] h-[1000px] justify-between w-[250px] ">

                    <img className="w-[250px] h-[250px]" src={blue} alt="" />



                    <img className="w-[250px] h-[250px]" src={black} alt="" />



                    <img className="w-[250px] h-[250px]" src={white} alt="" />


                </div>


            </div>
        </>

    )
}

export default Trending