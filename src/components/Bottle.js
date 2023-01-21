import React from 'react'
import banner from "../images/banner.jpg"
import { Link } from "react-router-dom"

function Bottle() {
    const style = {
        h1: "text-[70px] font-bold text-[#153A5B] translate-x-[150px] translate-y-[60px] max-md:text-[15px] max-md:hidden",
        p: "text-[#766860] text-[30px] translate-x-[150px] translate-y-[100px]  h-[60px] ",
        li: "text-[23px] w-[250px] justify-center items-center flex h-[50px] font-bold text-white bg-[#153A5B] absolute bottom-[160px] left-[150px] hover:bg-white border-[3px] border-[#153A5B] hover:text-[#153A5B] cursor-pointer duration-500",
        img: "bg-contain w-[800px] h-[800px] bg-no-repeat bg-center max-md:hidden",
        img1: "bg-contain w-[350px] h-[400px] bg-no-repeat bg-center mx-[20px] hidden max-md:block"
    }
    return (
        <>
            <div className='Bottle my-[300px] mx-[100px] max-md:hidden'>
                <img className={style.img} src={banner} alt="" />
                <div className='div relative translate-x-[0px] translate-y-[-50pc] max-md:hidden'>
                    <h1 className={style.h1}>LARQ Bottle <br /> PureVis™</h1>
                    <p className={style.p}>Brilliantly clean water from a self- <br /> cleaning bottle.</p>
                    <li className={style.li}>
                        <Link to="/shop">
                            Shop now

                        </Link>
                    </li>
                </div>

            </div>
            <div className='hidden  absolute left-[14px] my-[-200px] max-lg:block'>
                <img className={style.img1} src={banner} alt="" />
                <div className='hidden w-[350px] h-[400px] bg-[#EEF4F9] relative translate-x-[20px] max-lg:block'>
                    <h1 className="text-[35px] text-[#153A5B] font-bold px-[30px] translate-y-[30px] text">LARQ Bottle <br /> PureVis™</h1>
                    <p className="text-[#766860] translate-x-[30px] translate-y-[50px]">Brilliantly clean water from a self- <br /> cleaning bottle.</p>
                    <li className="text-[23px] w-[200px] justify-center items-center flex h-[50px] font-bold text-white bg-[#153A5B] translate-y-[80px] absolute left-[30px] hover:bg-white border-[3px] border-[#153A5B] hover:text-[#153A5B] cursor-pointer duration-500">
                        Shop now
                    </li>
                </div>
            </div>
        </>

    )
}

export default Bottle