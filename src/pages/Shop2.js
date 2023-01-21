import React, { useState, } from 'react'
import Navbar from "../components/Navbar"
import black from "../images/black.jpg"
import stars from "../images/stars.jpg"
import { HiOutlineXMark } from "react-icons/hi2"
import { GoTrashcan } from "react-icons/go"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

function Shop() {
    const [click, setclick] = useState(false)
    const [add, setCount] = useState(1)



    const style = {
        sidebar: `origin-top-right w-[590px] h-[750px] bg-[#153A5B] absolute right-[0px] top-[65px] z-10 text-white font-bold text-[20px] p-[40px] ${click ? 'scale-[1]' : 'scale-0'} duration-[.8s]`,

    }





    return (
        <div>
            <Navbar />
            <div className='flex'>
                <img className='w-[900px] h-[900px] mx-[100px] border-2 border-black rounded my-[110px]' src={black} alt="" />
                <div className='my-[100px]'>
                    <h1 className='text-[40px] text-[#153A5B] font-bold'>LARQ Bottle PureVis™</h1>
                    <span className='text-[#153A5B] font-bold text-[30px]'>$99.00</span>
                    <p className='text-[#8C8F91] text-[25px]'>Or 4 interest-free installments of $24.75</p>
                    <img className='w-[120px] h-[60px]' src={stars} alt="" />
                    <span className='text-[#153A5B] text-[22px] font-bold'>Insulation</span>
                    <div className='flex w-[520px] justify-between my-[20px]'>

                        <li className='border-[3px] border-[#153A5B] w-[250px] h-[80px] list-none px-[30px] text-[#153A5B] font-bold py-[10px]'>Insulated
                            <p className='text-[15px]'>24 hours cold and 12 hot</p>

                        </li>
                        <li className='border-[1px] border-[#E5E5E5] w-[250px] h-[80px] list-none px-[30px] text-[#153A5B] font-bold py-[10px] duration-500 cursor-pointer hover:border-[#153A5B]'>
                            Non-insulated
                            <p>Light as air</p>
                        </li>
                    </div>
                    <span className='text-[#153A5B] text-[20px] font-bold'>Size</span>
                    <div className='flex w-[520px] justify-between my-[20px]'>
                        <li className='border-[3px] border-[#153A5B] w-[250px] h-[50px] list-none px-[95px] text-[#153A5B] font-bold py-[10px]'>17 OZ

                        </li>
                        <li className='border-[1px] border-[#E5E5E5] w-[250px] h-[50px] list-none px-[95px] text-[#153A5B] font-bold py-[10px] duration-500 cursor-pointer hover:border-[#153A5B]'>25 OZ

                        </li>
                    </div>
                    <div className='my-[50px]  '>
                        <li className='w-[520px] text-[22px] text-[#153A5B] font-bold justify-center flex items-center h-[60px] border-[3px] border-[#153A5B]  duration-500 cursor-pointer hover:border-[#E5E5E5]'>Personalize</li>
                        <li onClick={() => setclick(click ? false : true)} className='w-[520px] text-[20px] text-[#153A5B] font-bold justify-center flex items-center h-[60px] bg-[#153A5B] duration-500 cursor-pointer text-white hover:bg-white hover:border-[3px] border-[#153A5B] hover:text-[#153A5B] my-[20px]'>Add to cart -$99.00</li>

                    </div>
                </div>
                <div className={style.sidebar}>
                    <HiOutlineXMark className='text-[35px] translate-x-[450px]' onClick={() => setclick(click ? false : true)} />
                    <span className='top-[40px] absolute'>Your Cart</span>
                    <div className='translate-y-[40px]'>
                        <img className='w-[80px] h-[80px] translate-y-[40px]' src={black} alt="" />
                        <div className='flex flex-col mx-[130px] my-[-40px]'>
                            <span>LARQ Bottle PureVis</span>
                            <p className='text-[16px]'>Insulated Monaco Blue17 oz</p>
                            <GoTrashcan onClick={() => setclick(click ? false : true)} className='translate-x-[300px] translate-y-[-40px]' />

                            <div className='w-[130px] h-[35px] border-2 border-[#EEEEEE] flex rounded-t-2xl rounded-r-2xl rounded-l-2xl'>
                                <AiOutlineMinus className="translate-y-[5px] translate-x-[10px] cursor-pointer" onClick={() => { setCount(add - 1) }} />
                                <li className='w-[60px] mx-[30px] my-[-2px] h-[33px] border-2 border-[#EEEEEE] flex justify-center items-center'>{add}</li>
                                <AiOutlinePlus className="translate-y-[5px] translate-x-[-10px] cursor-pointer" onClick={() => { setCount(add + 1) }} />
                            </div>

                        </div>

                    </div>
                    <div className='flex translate-y-[130px]'>
                        <div className='text-[20px] text-white flex flex-col '>
                            <span>Subtotal</span>
                            <span>You are saving</span>
                            <span>Total</span>

                        </div>
                        <div className='flex flex-col translate-x-[300px]'>
                            <span>$99</span>
                            <span>$10</span>
                            <span>$89</span>
                        </div>
                    </div>
                    <li className='w-[470px] h-[60px] bg-white text-[#153A5B] flex items-center justify-center translate-y-[250px] translate-x-[10px] hover:border-[3px] hover:bg-transparent duration-500 hover:border-[#fff] hover:text-[white] cursor-pointer'>
                        Check Out Now
                    </li>

                </div>
            </div>

        </div>
    )
}

export default Shop