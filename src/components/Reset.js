import React from 'react'
import Navbar from './Navbar'

function Reset() {
    const style = {
        h1: "text-[45px] my-[97px] font-bold text-[#153A5B] justify-center items-center flex",
        p: "text-[19px] text-[#5F6B6A] justify-center items-center flex",
        span: "text-[#5F5E60] text-[20px] left-[550px] top-[55%] absolute",
        input: "w-[558px] h-[56px] border-gray border-2 translate-x-[550px] translate-y-[120px]",
        btn_li: "flex w-[300px] text-[#ffffff] mx-[700px] my-[170px] font-bold justify-center items-center text-[20px] h-[50px] bg-[#153A5B] hover:bg-[#ffffff] hover:text-[#153A80] border-[#153A80] border-[3px] cursor-pointer duration-500"
    }
    return (
        <div>
            <Navbar />
            <div>
                <h1 className={style.h1}>Reset Password</h1>
                <p className={style.p}>Fill in your email below to request a new password. An email will be sent to <br /> the address below containing a link to verify your email address.</p>
                <span className={style.span}>Email Address</span>
                <input className={style.input} type="text" />
                <li className={style.btn_li}>Reset Password</li>
            </div>

        </div>
    )
}

export default Reset