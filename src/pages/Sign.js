import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"


function Sign() {
    const navigate = useNavigate()
    const [error, seterror] = useState(false)

    const LoginFunc = (e) => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
            });
    }


    const style = {
        h1: "text-[45px] my-[97px] font-bold text-[#153A5B] justify-center items-center flex",
        input: "w-[558px] h-[56px] border-gray border-2 translate-y-[-30px] peer border border-slate-400",
        input2: "w-[558px] h-[56px] border-gray border-2 translate-y-[-40px] peer border border-slate-400",
        input_div: "flex flex-col m-[40px] justify-between  h-[300px] absolute left-[100px]",
        span: "text-[#5F5E60] text-[20px] translate-y-[-20px]",
        li: "w-[196px] h-[50px] bg-[#153A5B] text-[#ffffff] font-bold text-[20px] flex justify-center items-center hover:bg-[#ffffff] hover:text-[#153A80] border-[#153A80] border-[3px] cursor-pointer duration-500",
        big_div: "mx-[280px]",
        li_div: "bg-[#F2F2F2] w-[540px] h-[380px] translate-x-[57pc] translate-y-[-50px]",
        li2: "text-[#6F7477] text-[20px] px-[60px]",
        btn_li: "flex w-[300px] text-[#ffffff] mx-[100px] my-[40px] font-bold justify-center items-center text-[20px] h-[50px] bg-[#153A5B] hover:bg-[#ffffff] hover:text-[#153A80] border-[#153A80] border-[3px] cursor-pointer duration-500",
        label: "text-[#D34749] text-[20px] translate-y-[-30px]"
    }

    return (
        <div>

            <Navbar />

            <form onSubmit={LoginFunc}>
                <h1 className={style.h1}>Sign in</h1>
                <div className={style.big_div}>
                    <div className={style.input_div}>

                        <span className={style.span}>Email Address</span>
                        <input type="text" name="name" id="name" required class={style.input} />

                        <p class="invisible peer-invalid:visible text-[20px] translate-y-[-30px] text-red-700 font-semibold">
                            Please enter your email
                        </p>

                        <span className="text-[#5F5E60] text-[20px] translate-y-[-30px]">Password</span>
                        <input className={style.input2} type="text" />
                        <p class="invisible peer-invalid:visible text-[20px] translate-y-[-30px] text-red-700 font-semibold">
                            Please enter your password
                        </p>

                    </div>
                    <div className='flex translate-y-[350px] '>
                        <li className={style.li}>{error && <h1>Nimadir hato?</h1>} Sign in</li>
                        <span className="underline text-[#6F7477] text-[21px] px-[20px] hover:cursor-pointer"> <Link to="/reset">Forgot Your Password?</Link></span>
                    </div>
                </div>

                <div className={style.li_div}>
                    <h1 className='text-[20px] text-[#153A5B] p-[30px] font-bold'>
                        New Customer?
                    </h1>
                    <span className='text-[#686560] text-[20px] px-[40px]'>
                        Create an account with us and you'll be able to:
                    </span>
                    <li className={style.li2}>Check out faster</li>
                    <li className={style.li2}>Save multiple shipping addresses</li>
                    <li className={style.li2}>Access your order history</li>
                    <li className={style.li2}>Track new orders</li>
                    <li className={style.btn_li}><Link to="/register"> Create Account</Link></li>
                </div>

            </form>

        </div>
    )
}

export default Sign