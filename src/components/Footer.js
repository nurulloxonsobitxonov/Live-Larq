import React from 'react'
import { ImFacebook2 } from "react-icons/im"
import { GrInstagram } from "react-icons/gr"
import { BsYoutube, BsTwitter } from "react-icons/bs"

function Footer() {
    const style = {
        Footer: "w-full h-[500px] bg-[#214463] my-[-400px] max-md:hidden"
    }
    return (
        <>
            <div className={style.Footer}>
                <div className='grid grid-cols-4'>
                    <div className='text-white text-[20px]  grid justify-between h-[300px] translate-y-[50px] mx-[40px]'>
                        <span className='font-bold'>Help</span>
                        <span>Frequently Asked Questions</span>
                        <span>Reviews</span>
                        <span>My Account</span>
                        <span>Corporate Gifting</span>
                        <span>Contact Us </span>

                    </div>
                    <div className='text-white text-[20px]  grid justify-between h-[300px] translate-y-[50px] mx-[10px]'>
                        <span className='font-bold'>Shop</span>
                        <span>Larq bottle PureVis™</span>
                        <span>Gift Sets</span>
                        <span>Travel Sleeve</span>
                        <span>Accessorries</span>
                    </div>
                    <div className='text-white text-[20px]  grid justify-between h-[300px] translate-y-[50px] mx-[-10px]'>
                        <span className='font-bold'>About</span>
                        <span>Basq Magazine</span>
                        <span>Press</span>
                        <span>Our Story</span>
                        <span>Technology</span>
                        <span>Affillate proggram</span>
                        <span>Ambassador proggram</span>
                    </div>
                    <div className='text-white text-[20px]   justify-between translate-y-[50px] '>
                        <span>Sign up for our newsletter</span>
                        <div className='flex translate-x-[-150px] w-[500px] wrap my-[30px]' >
                            <input className='w-[400px] h-[50px] outline-none mx-[20px] text-black' type="text" placeholder='Enter your email' />
                            <li className='w-[250px] h-[50px] bg-white text-[#214463] list-none justify-center items-center flex text-[#214463] font-bold'>Sign up</li>

                        </div>

                    </div>


                </div>
            </div >
            <div className='hidden max-lg:block w-[400px] h-[1800px] left-[0px] absolute translate-y-[4100px] bg-[#153A5B] '>
                <span className='text-white font-bold px-[100px] absolute top-[80px]'>
                    Sign up for our newsletter
                </span>
                <div className=' absolute left-[20px] translate-y-[120px]'>
                    <input className='w-[330px] h-[40px] outline-none' type="text" placeholder='Enter your email' />
                    <li className='w-[330px] h-[40px] bg-white my-[10px] text-[#153A5B] text-[20px] font-bold justify-center items-center flex'>Sign up</li>

                </div>
                <div className='flex translate-x-[100px] translate-y-[230px] w-[200px]  justify-between'>
                    <img className='w-[30px] h-[20px]' src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png" alt="" /> <span className='text-white'>United States</span> <select className='w-[20px] bg-transparent' name="" id="">
                        <option value="">
                            <img className='w-[100px] h-[40px]' alt="" /> Canada


                        </option>
                        <option value="">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/255px-Flag_of_the_United_Kingdom.svg.png" alt="" />
                            United Kingdom
                        </option>
                    </select>
                </div>
                <div className='absolute left-[90px] translate-y-[250px] text-white '>
                    <div className='flex flex-col w-[250px] justify-between  h-[300px]  '>
                        <span className='font-bold px-[80px]'>Help</span>
                        <span>Frequently Asked Questions</span>
                        <span className='px-[70px]'>Reviews</span>
                        <span className='px-[60px]'>My Account</span>
                        <span className='px-[40px]'>Corporate Gifting</span>
                        <span className='px-[60px]'>Contact Us </span>


                    </div>
                    <div className='flex flex-col w-[300px] justify-between translate-y-[70px] h-[300px]'>
                        <span className='font-bold px-[90px]'>Shop</span>
                        <span className=' px-[35px]'>Larq bottle PureVis™</span>
                        <span className='px-[80px]'>Gift Sets</span>
                        <span className='px-[65px]'> Travel Sleeve</span>
                        <span className='px-[70px]'> Accessories</span>

                    </div>
                    <div className='flex flex-col w-[300px] justify-between translate-y-[120px] h-[350px]'>
                        <span className='font-bold px-[80px]'>About</span>
                        <span className=' px-[50px]'>Basq Magazine</span>
                        <span className='px-[80px]'>Press</span>
                        <span className='px-[65px]'> Our Story</span>
                        <span className='px-[60px]'> Technology</span>
                        <span className='px-[40px]'>Affillate proggram</span>
                        <span className='px-[30px]'>Ambassador proggram</span>
                    </div>
                    <div className='flex w-[220px] justify-between  translate-y-[250px] text-[25px]'>
                        <ImFacebook2 />
                        <GrInstagram />
                        <BsYoutube />
                        <BsTwitter />

                    </div>
                    <div className='translate-y-[350px]'>
                        <p className='translate-x-[-20px]'>
                            © 2022 LARQ. All Rights Reserved.
                        </p>
                        <span className='px-[40px] absolute top-[70px]'>
                            Terms & Privacy
                        </span>
                    </div>
                </div>


            </div>
        </>

    )
}

export default Footer