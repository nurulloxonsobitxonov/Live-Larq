import React from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom"


function Account() {
    const style = {
        input: "w-[500px] h-[56px] border-[#CCCCCC] border-2 translate-y-[-30px]",
        input_div: "grid grid-cols-2 gap-y-[100px] w-[1200px]  mx-[200px]"
    }
    return (
        <div>
            <Navbar />
            <div>
                <h1 className='text-[50px] text-[#153A5B] font-bold flex items-center justify-center py-[100px]'>
                    New Account
                </h1>
                <div className={style.input_div}>
                    <span className='absolute top-[265px] text-[22px] text-[#AA8160]'>Email Address</span>
                    <span className='absolute top-[265px] left-[800px] text-[22px] text-[#AA8160]'>Password</span>
                    <span className='absolute top-[420px]  text-[22px] text-[#AA8160]'>Confirm Password</span>
                    <span className='absolute top-[420px] left-[800px] text-[22px] text-[#AA8160]'>Country</span>
                    <span className='absolute top-[570px] text-[22px] text-[#AA8160]'>First Name</span>
                    <span className='absolute top-[570px] left-[800px] text-[22px] text-[#AA8160]'>Last Name</span>
                    <span className='absolute top-[720px]  text-[22px] text-[#AA8160]'>Address Line 1</span>
                    <span className='absolute top-[720px] left-[800px] text-[22px] text-[#AA8160]'>Address Line 2</span>
                    <span className='absolute top-[880px]  text-[22px] text-[#AA8160]'>Company Name</span>

                    <input className={style.input} type="text" />
                    <input className={style.input} type="text" />
                    <input className={style.input} type="text" />
                    <input className="w-[500px] h-[56px] border-[#CCCCCC] border-2 translate-y-[-30px]  text-[20px] px-[20px]" placeholder="label-select-country " type="text" />
                    <input className={style.input} type="text" />
                    <input className={style.input} type="text" />
                    <input className={style.input} type="text" />
                    <input className={style.input} type="text" />
                    <input className={style.input} type="text" />


                </div>
                <li className='w-[250px] h-[50px] bg-[#153A5B] text-white text-[20px] font-bold justify-center flex items-center mx-[600px] my-[140px] cursor-pointer hover:text-[#153A5B] duration-500 hover:bg-white border-[3px] border-[#153A5B]'>
                    <Link to="/spinner"> Create Account</Link>
                </li>
                <div className='bg-white text-white'>
                    <h1>hello</h1>
                </div>
            </div>
        </div>
    )
}

export default Account