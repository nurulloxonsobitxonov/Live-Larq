import React, { useState } from 'react'
import { TbDisabled } from "react-icons/tb"
import { HiOutlineXMark } from "react-icons/hi2"
import { IoIosSwap } from "react-icons/io"
import { IoStatsChart, IoResize, IoReader } from "react-icons/io5"
import { GrHide } from "react-icons/gr"
import { BsSearch, BsCircleHalf, BsFillPrinterFill, BsArrowBarRight, BsMoon, BsDropletFill, BsCursorFill } from "react-icons/bs"
import { BsDroplet } from "react-icons/bs"
import { AiTwotoneThunderbolt, AiFillEye, AiOutlineAlignCenter, AiOutlineAlignLeft, AiOutlineAlignRight, AiOutlineLink, AiFillBook } from "react-icons/ai"
import { BiTargetLock, BiFontFamily, BiFontSize, BiChevronDown, BiChevronUp } from "react-icons/bi"
import { RiRhythmLine, RiLinksFill, RiContrastDropFill } from "react-icons/ri"
import { SlSizeFullscreen } from "react-icons/sl"
import { FaSearchPlus } from "react-icons/fa"
import { Link } from "react-router-dom"
import { MdTitle, MdImageNotSupported, MdAnimation } from "react-icons/md"
import { FiSun, FiSquare } from "react-icons/fi"
import { FaVolumeMute, FaHandPointer, FaRegHandPointer } from "react-icons/fa"



function Main() {

    const [click, setclick] = useState(false)
    const [add, setCount] = useState(0)
    const [add2, setCounter] = useState(0)
    const [add3, setCounter3] = useState(0)
    const [add4, setCounter4] = useState(0)
    const [color_click, setColor_click] = useState(false)
    const [color_click2, setColor_click2] = useState(false)
    const [color_click3, setColor_click3] = useState(false)
    const [color_click4, setColor_click4] = useState(false)
    const [color_click5, setColor_click5] = useState(false)
    const [color_click6, setColor_click6] = useState(false)
    const [color_click7, setColor_click7] = useState(false)
    const [color_click8, setColor_click8] = useState(false)
    const [color_click9, setColor_click9] = useState(false)
    const [color_click10, setColor_click10] = useState(false)
    const [color_click11, setColor_click11] = useState(false)
    const [color_click12, setColor_click12] = useState(false)
    const [color_click13, setColor_click13] = useState(false)
    const [color_click14, setColor_click14] = useState(false)
    const [color_click15, setColor_click15] = useState(false)
    const [color_click16, setColor_click16] = useState(false)
    const [color_click17, setColor_click17] = useState(false)
    const [color_click18, setColor_click18] = useState(false)
    const [color_click19, setColor_click19] = useState(false)
    const [color_click20, setColor_click20] = useState(false)
    const [color_click21, setColor_click21] = useState(false)




    const style = {
        main: "main max-lg:hidden",
        li: "text-[50px] py-[51px]  w-[580px] text-white  translate-y-[50px] font-bold  h-[30px] w-[280px]  flex flex-col translate-x-[85px] translate-y-[20px] ",
        p: "text-[25px] text-white translate-y-[300px] px-[80px] ",
        li1: "li1 group text-white text-[20px] font-bold w-[240px] h-[50px] bg-[#153A5B] list-none absolute top-[540px] mx-[80px] flex items-center justify-center z-10 hover:bg-white  cursor-pointer group hover:text-[#153A5B] duration-500 ",
        li2: "li2 group-hover:mx-[100px] w-[240px] h-[50px] border-[#153A5B] border-[3px] list-none my-[375px] mx-[90px] z-auto ",
        disable_div: `w-[720px] h-[720px] top-[70px] fixed overflow-scroll  rounded-2xl bg-gray-200  left-[35px]  max-md:hidden z-10  duration-500 ${click ? 'block' : 'hidden'}`,
        person_div: " w-[60px] fixed top-[660px] translate-x-[96pc]  h-[60px] rounded-[50%] bg-[#146ff8] hover:scale-[1.1] duration-500 cursor-pointer max-md:hidden",
        person: "text-white text-[40px]   mx-[10px] translate-y-[9px]",
        div_div: "w-full h-[500px] bg-[#146ff8] rounded-2xl",
        else_div: "w-[600px] h-[700px]  bg-white my-[-150px] rounded-2xl mx-[38.9px] z-10 relative",
        justify: " translate-x-[10px] items-center justify-center  grid grid-cols-3 list-none",
        justify_li: "w-[200px] h-[40px] rounded-[100px] bg-white hover:scale-[1.06] duration-300 cursor-pointer flex justify-center items-center text-[#146ff8] text-[20px]",
        hr_li: "w-[90%] h-[1px] bg-gray-300 flex mx-[30px] my-[15px]",
        content: "w-[600px] h-[1000px] bg-white my-[200px] rounded-2xl mx-[38.9px]",
        chevron: "w-[45px] h-[45px] bg-[#146FF8] text-white rounded-[100%]",
        divcha: `w-[250px] h-[120px] bg-[#F2F7FA] border-2 border-transparent hover:cursor-pointer hover:border-[#146FF8] mx-[10px] rounded-2xl relative ${color_click ? 'bg-blue-500' : 'bg-[#F2F7FA]'}  `,
        divcha7: `w-[250px] h-[120px] bg-[#F2F7FA] border-2 border-transparent hover:cursor-pointer hover:border-[#146FF8] mx-[10px] rounded-2xl relative ${color_click7 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}  `,
        divcha8: `w-[250px] h-[120px] bg-[#F2F7FA] border-2 border-transparent hover:cursor-pointer hover:border-[#146FF8] mx-[10px] rounded-2xl relative ${color_click8 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}  `,
        divcha9: `w-[250px] h-[120px] bg-[#F2F7FA] border-2 border-transparent hover:cursor-pointer hover:border-[#146FF8] mx-[10px] rounded-2xl relative ${color_click9 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}  `,
        divcha1: `w-[250px] h-[120px] bg-[#F2F7FA] border-2 border-transparent hover:cursor-pointer hover:border-[#146FF8] mx-[10px] rounded-2xl relative ${color_click2 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}`,
        divcha2: `w-[250px] h-[120px] bg-[#F2F7FA] border-2 border-transparent hover:cursor-pointer hover:border-[#146FF8] mx-[10px] rounded-2xl relative ${color_click3 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}`,
        divcha4: `w-[250px] h-[150px] bg-[#F2F7FA] border-2 border-transparent hover:cursor-pointer hover:border-[#146FF8] mx-[37px] my-[-30px] rounded-2xl relative ${color_click4 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}`,
        divcha5: `w-[250px] h-[150px] bg-[#F2F7FA] border-2 border-transparent hover:cursor-pointer hover:border-[#146FF8] mx-[37px] my-[-30px] rounded-2xl relative  ${color_click5 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}`,
        divcha6: `w-[250px] h-[150px] bg-[#F2F7FA] border-2 border-transparent hover:cursor-pointer hover:border-[#146FF8] mx-[37px] my-[-30px] rounded-2xl relative ${color_click6 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}`,
        divcha10: `w-[180px] h-[120px] bg-[#F2F7FA] border-2 border-transparent my-[40px] hover:cursor-pointer hover:border-[#146FF8] mx-[25px] rounded-2xl relative ${color_click10 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}`,
        divcha11: ` w-[180px] h-[120px] bg-[#F2F7FA] border-2 border-transparent  hover:cursor-pointer hover:border-[#146FF8] mx-[25px] my-[30px] rounded-2xl relative ${color_click11 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}`,
        divcha12: `w-[180px] h-[120px] bg-[#F2F7FA] border-2 border-transparent  hover:cursor-pointer hover:border-[#146FF8] mx-[25px] my-[30px] rounded-2xl relative  ${color_click12 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}`,
        divcha13: `w-[180px] h-[120px] bg-[#F2F7FA] border-2 border-transparent  hover:cursor-pointer hover:border-[#146FF8] mx-[25px] my-[30px] rounded-2xl relative  ${color_click13 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}`,
        divcha14: `w-[180px] h-[120px] bg-[#F2F7FA] border-2 border-transparent  hover:cursor-pointer hover:border-[#146FF8] mx-[25px] my-[30px] rounded-2xl relative  ${color_click14 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}`,
        divcha15: `w-[180px] h-[120px] bg-[#F2F7FA] border-2 border-transparent  hover:cursor-pointer hover:border-[#146FF8] mx-[25px] my-[10px] rounded-2xl relative  ${color_click15 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}`,
        divcha16: `w-[250px] h-[120px] bg-[#F2F7FA] border-2 border-transparent hover:cursor-pointer hover:border-[#146FF8] mx-[10px] rounded-2xl relative ${color_click16 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}  `,
        divcha17: `w-[250px] h-[120px] bg-[#F2F7FA] border-2 border-transparent hover:cursor-pointer hover:border-[#146FF8] mx-[10px] rounded-2xl relative ${color_click17 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}  `,
        divcha18: `w-[250px] h-[120px] bg-[#F2F7FA] border-2 border-transparent hover:cursor-pointer hover:border-[#146FF8] mx-[10px] rounded-2xl relative ${color_click18 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}  `,
        divcha19: `w-[250px] h-[120px] bg-[#F2F7FA] border-2 border-transparent hover:cursor-pointer hover:border-[#146FF8] mx-[10px] rounded-2xl relative ${color_click19 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}  `,
        divcha20: `w-[250px] h-[120px] bg-[#F2F7FA] border-2 border-transparent hover:cursor-pointer hover:border-[#146FF8] mx-[10px] rounded-2xl relative ${color_click20 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}  `,
        divcha21: `w-[250px] h-[120px] bg-[#F2F7FA] border-2 border-transparent hover:cursor-pointer hover:border-[#146FF8] mx-[10px] rounded-2xl relative ${color_click21 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}  `,
        // divcha15: `${color_click15 ? 'bg-blue-500' : 'bg-[#F2F7FA]'}`,
        color: "w-[600px] h-[700px] bg-white mx-[38.9px] rounded-2xl  my-[-150px]",
        orient: "w-[600px] h-[700px] bg-white mx-[38.9px] rounded-2xl  my-[200px]"
    }

    return (
        <>
            <div>
                <div className={style.main}>
                    <li className={style.li}>Unwrap healthier <br /> <span> hydration this</span><span>holiday</span> </li>
                    <p className={style.p}>Gift them best-in-class Nano Zero water <br /> filtration and PureVis™ technology.</p>
                    <li className={style.li1}><Link to="/shop">Shop now</Link> </li>
                    <li className={style.li2}></li>
                    <div className={style.person_div}>
                        <TbDisabled onClick={() => setclick(click ? false : true)} className={style.person} />

                    </div>

                    <div className={style.disable_div}>
                        <div className={style.div_div}>
                            <HiOutlineXMark onClick={() => setclick(click ? false : true)} className='text-[30px] text-white font-bold mx-[10px] translate-y-[10px] cursor-pointer' />
                            <h1 className='text-[30px] font-bold text-white p-[20px] px-[150px]'>Accessibility Adjustment</h1>
                            <div className={style.justify}>
                                <li className={style.justify_li}><IoIosSwap /> Reset Settings</li>
                                <li className={style.justify_li}><IoStatsChart />Statement</li>
                                <li className={style.justify_li}><GrHide />Hide Interface</li>

                            </div>
                            <div className='flex w-[600px] h-[50px] rounded-[100px] border-black border-2 bg-blue-600 my-[50px] mx-[40px]'>
                                <BsSearch className='text-white text-[25px] translate-x-[30px] translate-y-[10px]' />
                                <input type="text" placeholder='Unclear content? Search in dictionary...' className='bg-transparent w-[400px] translate-x-[60px] placeholder:text-white outline-none' />
                            </div>

                        </div>
                        <div className={style.else_div}>
                            <h1 className='text-gray-600 text-[25px] p-[20px] '>Choose the right accessibility profile for you</h1>
                            <div className='flex'>
                                <span className='switch'>
                                    <input type="checkbox" id="switcher" />
                                    <label htmlFor="switcher"></label>
                                </span>
                                <div className='hover:text-[#146ff8] px-[40px] cursor-pointer'>
                                    <p className=' text-[21px]'>Seizure Safe Profile</p>
                                    <p>Clear flashes & reduces color</p>
                                    <AiTwotoneThunderbolt className='text-[30px] mx-[30px] w-[35px] h-[30px] rounded-[100%] bg-gray-200 absolute right-[0] top-[100px]' />

                                </div>

                            </div>
                            <li className={style.hr_li}></li>
                            <div className='flex'>
                                <span className='switch'>
                                    <input type="checkbox" name="" id="switcher" />
                                    <label htmlFor="switcher"></label>
                                </span>
                                <div className='hover:text-[#146ff8] px-[40px] cursor-pointer'>
                                    <p className=' text-[21px]'>Vision Impaired Profile</p>
                                    <p>Enhances website's visuals</p>
                                    <AiFillEye className='text-[30px] mx-[30px] w-[35px] h-[30px] rounded-[100%] bg-gray-200 absolute right-[0] top-[175px]' />


                                </div>

                            </div>
                            <li className={style.hr_li}></li>
                            <div className='flex'>
                                <span className='switch'>
                                    <input type="checkbox" name="" id="switcher" />
                                    <label htmlFor="switcher"></label>
                                </span>
                                <div className='hover:text-[#146ff8] px-[40px] cursor-pointer'>
                                    <p className=' text-[21px]'>ADHD Friendly Profile</p>
                                    <p>More focus & fewer distraction</p>
                                    <BsFillPrinterFill className='text-[30px] mx-[30px] w-[35px] h-[30px] rounded-[100%] bg-gray-200 absolute right-[0] top-[265px]' />


                                </div>

                            </div>
                            <li className={style.hr_li}></li>

                            <div className='flex'>
                                <span className='switch'>
                                    <input type="checkbox" name="" id="switcher" />
                                    <label htmlFor="switcher"></label>
                                </span>
                                <div className='hover:text-[#146ff8] px-[40px] cursor-pointer'>
                                    <p className=' text-[21px]'>Cognitive Disability Profile</p>
                                    <p>Cleare sflashes and enhances sight</p>
                                    <BiTargetLock className='text-[30px] mx-[30px] w-[35px] h-[30px] rounded-[100%] bg-gray-200 absolute right-[0] top-[350px]' />


                                </div>

                            </div>
                            <li className={style.hr_li}></li>

                            <div className='flex'>
                                <span className='switch'>
                                    <input type="checkbox" name="" id="switcher" />
                                    <label htmlFor="switcher"></label>
                                </span>
                                <div className='hover:text-[#146ff8] px-[40px] cursor-pointer'>
                                    <p className=' text-[21px]'>
                                        Keyword Navigation Motor
                                    </p>
                                    <p>Cleare sflashes and enhances sight</p>
                                    <BsArrowBarRight className='text-[30px] mx-[30px] w-[35px] h-[30px] rounded-[100%] bg-gray-200 absolute right-[0] top-[450px]' />


                                </div>

                            </div>
                            <li className={style.hr_li}></li>

                            <div className='flex'>
                                <span className='switch'>
                                    <input type="checkbox" name="" id="switcher" />
                                    <label htmlFor="switcher"></label>
                                </span>
                                <div className='hover:text-[#146ff8] px-[40px] cursor-pointer'>
                                    <p className=' text-[21px]'>
                                        Blind Users (Screen Reader)
                                    </p>
                                    <p>Cleare sflashes and enhances sight</p>
                                    <RiRhythmLine className='text-[30px] mx-[30px] w-[35px] h-[30px] rounded-[100%] bg-gray-200 absolute right-[0] top-[520px]' />


                                </div>

                            </div>
                            <li className={style.hr_li}></li>


                        </div>
                        <div className={style.content}>
                            <h1 className='text-[30px] text-[#5D626C] p-[10px]'>Content Adjustments</h1>
                            <div className='bg-[#F2F7FA] w-[350px] h-[150px] rounded-2xl mx-[20px]'>
                                <div className='flex justify-center items-center py-[40px]'>
                                    <SlSizeFullscreen className='text-[25px] ' /><span>Content Scalling</span>

                                </div>
                                <div className='flex'>
                                    <div className='flex overflow-visible my-[-20px] mx-[20px] text-[#149FFB] '>
                                        <BiChevronDown className={style.chevron} onClick={() => { setCount(add - 10) }} />
                                        <li className='list-none w-[200px] h-[50px] items-center  bg-white text-[30px] px-[60px] '>{add}%</li>
                                        <BiChevronUp className={style.chevron} onClick={() => { setCount(add + 10) }} />
                                    </div>
                                    <div className=' p-[70px] h-[150px] border-2 border-transparent bg-[#F2F7FA] mx-[40px] rounded-2xl my-[-105px] hover:border-[#146FF8] cursor-pointer'>
                                        <BiFontFamily className='text-[30px]' />
                                        <span className='font-bold px-[-35px] '>Redable</span>
                                    </div>
                                </div>

                                <div className='my-[40px] flex  w-[550px]  flex my-[60px]'>
                                    <div onClick={() => setColor_click2(color_click2 ? false : true)} className={style.divcha1}>
                                        <MdTitle className='text-[30px] mx-[60px] translate-y-[40px]' />
                                        <span className='font-bold absolute top-[65px] left-[40px]'>Highlight</span>
                                    </div>
                                    <div onClick={() => setColor_click(color_click ? false : true)} className={style.divcha}>
                                        <RiLinksFill className='text-[30px] mx-[60px] translate-y-[30px]' />
                                        <span className='font-bold text-[20px] absolute top-[65px] left-[40px]'>
                                            Links
                                        </span>
                                    </div>
                                    <div onClick={() => setColor_click3(color_click3 ? false : true)} className={style.divcha2}>
                                        <FaSearchPlus className='text-[30px] mx-[60px] translate-y-[30px]' />
                                        <span className='font-bold text-[20px] absolute top-[65px] left-[40px]'>
                                            Magnifier
                                        </span>
                                    </div>

                                </div>

                            </div>
                            <div className='bg-[#F2F7FA] w-[350px] h-[150px] rounded-2xl mx-[20px] my-[180px]'>
                                <div className='flex translate-x-[80px] translate-y-[30px]'>
                                    <BiFontSize className='text-[30px]' />
                                    <h1 className='px-[20px]'>Adjust Font Sizing</h1>

                                </div>
                                <div className='flex'>
                                    <div className='flex'>
                                        <div className='flex overflow-visible my-[50px] mx-[20px] text-[#149FFB] '>
                                            <BiChevronDown className={style.chevron} onClick={() => { setCounter(add2 - 10) }} />
                                            <li className='list-none w-[200px] h-[50px] items-center  bg-white text-[30px] px-[60px] '>{add2}%</li>
                                            <BiChevronUp className={style.chevron} onClick={() => { setCounter(add2 + 10) }} />
                                        </div>

                                    </div>
                                    <div onClick={() => setColor_click4(color_click4 ? false : true)} className={style.divcha4}>
                                        <AiOutlineAlignCenter className='text-[30px] mx-[60px] translate-y-[40px]' />
                                        <span className='font-bold absolute top-[80px] left-[58px]'>Align</span>
                                    </div>
                                </div>

                            </div>
                            <div className='bg-[#F2F7FA] w-[350px] h-[150px] rounded-2xl mx-[20px] my-[-150px]'>
                                <div className='flex translate-x-[80px] translate-y-[30px]'>
                                    <IoResize className='text-[30px]' />
                                    <h1 className='px-[20px]'>Adjust Font Sizing</h1>

                                </div>
                                <div className='flex'>
                                    <div className='flex'>
                                        <div className='flex overflow-visible my-[50px] mx-[20px] text-[#149FFB] '>
                                            <BiChevronDown className={style.chevron} onClick={() => { setCounter3(add3 - 10) }} />
                                            <li className='list-none w-[200px] h-[50px] items-center  bg-white text-[30px] px-[60px] '>{add3}%</li>
                                            <BiChevronUp className={style.chevron} onClick={() => { setCounter3(add3 + 10) }} />
                                        </div>

                                    </div>
                                    <div className="w-[250px] h-[150px] bg-[#F2F7FA] border-2 border-transparent hover:cursor-pointer hover:border-[#146FF8] mx-[37px] my-[-30px] rounded-2xl relative">
                                        <AiOutlineAlignLeft className='text-[30px] mx-[60px] translate-y-[40px]' />
                                        <span className='font-bold absolute top-[65px] left-[40px]'>Highlight</span>
                                    </div>
                                </div>

                            </div>
                            <div className='bg-[#F2F7FA] w-[350px] h-[150px] rounded-2xl mx-[20px] my-[-150px]'>
                                <div className='flex translate-x-[80px] translate-y-[30px]'>
                                    <IoResize className='text-[30px]' />
                                    <h1 className='px-[20px]'>Adjust Font Sizing</h1>

                                </div>
                                <div className='flex'>
                                    <div className='flex'>
                                        <div className='flex overflow-visible my-[50px] mx-[20px] text-[#149FFB] '>
                                            <BiChevronDown className={style.chevron} onClick={() => { setCounter4(add4 - 10) }} />
                                            <li className='list-none w-[200px] h-[50px] items-center  bg-white text-[30px] px-[60px] '>{add4}%</li>
                                            <BiChevronUp className={style.chevron} onClick={() => { setCounter4(add4 + 10) }} />
                                        </div>

                                    </div>
                                    <div onClick={() => setColor_click5(color_click5 ? false : true)} className={style.divcha5}>
                                        <AiOutlineAlignLeft className='text-[30px] mx-[60px] translate-y-[40px]' />
                                        <span className='font-bold absolute top-[75px] left-[60px]'>Left</span>
                                    </div>
                                </div>


                            </div>
                            <div className='bg-[#F2F7FA] w-[350px] h-[150px] rounded-2xl mx-[20px] my-[200px]'>
                                <div className='flex translate-x-[80px] translate-y-[30px]'>
                                    <IoResize className='text-[30px]' />
                                    <h1 className='px-[20px]'>Adjust Font Sizing</h1>

                                </div>
                                <div className='flex'>
                                    <div className='flex'>
                                        <div className='flex overflow-visible my-[50px] mx-[20px] text-[#149FFB] '>
                                            <BiChevronDown className={style.chevron} onClick={() => { setCounter3(add3 - 10) }} />
                                            <li className='list-none w-[200px] h-[50px] items-center  bg-white text-[30px] px-[60px] '>+{add3}%</li>
                                            <BiChevronUp className={style.chevron} onClick={() => { setCounter3(add3 + 10) }} />
                                        </div>

                                    </div>
                                    <div onClick={() => setColor_click6(color_click6 ? false : true)} className={style.divcha6}>
                                        <AiOutlineAlignRight className='text-[30px] mx-[60px] translate-y-[40px]' />
                                        <span className='font-bold absolute top-[75px] left-[50px]'>Right</span>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className={style.color}>
                            <h1 className='text-[30px] p-[20px] text-gray-400
                        '>
                                Color Adjusment
                            </h1>
                            <div>

                                <div className=' flex  w-[550px]  flex mx-[20px]'>
                                    <div onClick={() => setColor_click7(color_click7 ? false : true)} className={style.divcha7}>
                                        <BsMoon className='text-[30px] mx-[60px] translate-y-[20px]' />
                                        <span className='font-bold absolute top-[65px] left-[20px]'>Dark Contrast</span>
                                    </div>
                                    <div onClick={() => setColor_click8(color_click8 ? false : true)} className={style.divcha8}>
                                        <FiSun className='text-[30px] mx-[60px] translate-y-[30px]' />
                                        <span className='font-bold text-[20px] absolute top-[65px] left-[10px]'>
                                            Light Contrast
                                        </span>
                                    </div>
                                    <div onClick={() => setColor_click9(color_click9 ? false : true)} className={style.divcha9}>
                                        <BsCircleHalf className='text-[30px] mx-[60px] translate-y-[30px]' />
                                        <span className='font-bold text-[20px] absolute top-[65px] left-[10px]'>
                                            High Constrast
                                        </span>
                                    </div>

                                </div>
                                <div className='flex'>
                                    <div onClick={() => setColor_click10(color_click10 ? false : true)} className={style.divcha10}>
                                        <BsDropletFill className='text-[30px] mx-[60px] translate-y-[20px]' />
                                        <span className='font-bold absolute top-[65px] left-[30px]'>High Saturation</span>
                                    </div>
                                    <div className='bg-[#F2F7FA] w-[350px] h-[120px] rounded-2xl mx-[20px] my-[35px]'>
                                        <div className='flex justify-center items-center py-[40px]'>
                                            <span>Adjust Text Colors</span>
                                        </div>
                                        <div className='flex'>
                                            <div className='flex overflow-visible my-[-20px] mx-[50px] text-[#149FFB] w-[250px] justify-between'>
                                                <li className='w-[25px] h-[25px] bg-[#0076B4] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#7a549c] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#c83733] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#d07021] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#26999f] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#4d7831] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#ffffff] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#000000] rounded-[100%] list-none my-[-10px]'></li>

                                            </div>
                                        </div>


                                    </div>


                                </div>
                                <div className='flex'>
                                    <div className="w-[180px] h-[120px] bg-[#F2F7FA] border-2 border-transparent  hover:cursor-pointer hover:border-[#146FF8] mx-[25px] rounded-2xl relative">
                                        <RiContrastDropFill className='text-[30px] mx-[60px] translate-y-[20px]' />
                                        <span className='font-bold absolute top-[65px] left-[30px]'>Monochrome</span>
                                    </div>
                                    <div className='bg-[#F2F7FA] w-[350px] h-[120px] rounded-2xl mx-[20px]'>
                                        <div className='flex justify-center items-center py-[40px]'>
                                            <span>Adjust Text Colors</span>
                                        </div>
                                        <div className='flex'>
                                            <div className='flex overflow-visible my-[-20px] mx-[50px] text-[#149FFB] w-[250px] justify-between'>
                                                <li className='w-[25px] h-[25px] bg-[#0076B4] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#7a549c] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#c83733] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#d07021] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#26999f] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#4d7831] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#ffffff] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#000000] rounded-[100%] list-none my-[-10px]'></li>

                                            </div>
                                        </div>


                                    </div>


                                </div>
                                <div className='flex'>
                                    <div onClick={() => setColor_click11(color_click11 ? false : true)} className={style.divcha11}>
                                        <BsDroplet className='text-[30px] mx-[60px] translate-y-[20px]' />
                                        <span className='font-bold absolute top-[65px] left-[30px]'>Monochrome</span>
                                    </div>
                                    <div className='bg-[#F2F7FA] w-[350px] h-[120px] rounded-2xl mx-[20px] my-[30px]'>
                                        <div className='flex justify-center items-center py-[40px]'>
                                            <span>Adjust Text Colors</span>
                                        </div>
                                        <div className='flex'>
                                            <div className='flex overflow-visible my-[-20px] mx-[50px] text-[#149FFB] w-[250px] justify-between'>
                                                <li className='w-[25px] h-[25px] bg-[#0076B4] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#7a549c] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#c83733] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#d07021] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#26999f] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#4d7831] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#ffffff] rounded-[100%] list-none my-[-10px]'></li>
                                                <li className='w-[25px] h-[25px] bg-[#000000] rounded-[100%] list-none my-[-10px]'></li>

                                            </div>
                                        </div>


                                    </div>


                                </div>

                            </div>
                        </div>
                        <div className={style.orient}>
                            <h1 className='text-[25px] p-[20px] text-[#1f2533]'>Orientation Adjustments</h1>
                            <div className=' flex  w-[550px]  flex mx-[-10px] my-[px]'>
                                <div onClick={() => setColor_click12(color_click12 ? false : true)} className={style.divcha12}>
                                    <FaVolumeMute className='text-[30px] mx-[60px] translate-y-[20px]' />
                                    <span className='font-bold text-[20px] absolute top-[65px] left-[20px]'>Mute Sounds</span>
                                </div>
                                <div onClick={() => setColor_click13(color_click13 ? false : true)} className={style.divcha13}>
                                    <MdImageNotSupported className='text-[30px] mx-[60px] translate-y-[30px]' />
                                    <span className='font-bold text-[20px] absolute top-[65px] left-[10px]'>
                                        Light Contrast
                                    </span>
                                </div>
                                <div onClick={() => setColor_click14(color_click14 ? false : true)} className={style.divcha14}>
                                    <IoReader className='text-[30px] mx-[60px] translate-y-[30px]' />
                                    <span className='font-bold text-[20px] absolute top-[65px] left-[10px]'>
                                        Reading Guide
                                    </span>
                                </div>

                            </div>
                            <div className='flex'>
                                <div onClick={() => setColor_click15(color_click15 ? false : true)} className={style.divcha15}>
                                    <BsCursorFill className='text-[30px] mx-[80px] translate-y-[30px]' />
                                    <span className='font-bold text-[20px] absolute top-[65px] left-[20px]'>
                                        Reading Guide
                                    </span>
                                </div>
                                <div className='bg-[#F2F7FA] w-[350px] h-[120px] rounded-2xl mx-[20px] my-[10px]'>
                                    <div className='flex justify-center items-center py-[40px]'>
                                        <AiOutlineLink className='text-[35px] translate-y-[-30px]' />
                                        <span className='translate-y-[-30px] text-[25px]'>Useful Links</span>
                                    </div>
                                    <div className='flex'>
                                        <div>

                                            <select className='w-[200px] rounded-[100px] h-[50px] bg-white border-2 border-black mx-[60px] translate-y-[-60px]' name="" id="">
                                                <option className='' value="">Select an option</option>
                                                <option value="">Two</option>

                                            </select>
                                        </div>
                                    </div>


                                </div>

                            </div>
                            <div className=' flex  w-[550px]  flex mx-[20px] my-[10px]'>
                                <div onClick={() => setColor_click16(color_click16 ? false : true)} className={style.divcha16}>
                                    <MdAnimation className='text-[30px] mx-[60px] translate-y-[20px]' />
                                    <span className='font-bold text-[20px] absolute top-[65px] left-[5px]'>Stop Animation</span>
                                </div>
                                <div onClick={() => setColor_click17(color_click17 ? false : true)} className={style.divcha17}>
                                    <FiSquare className='text-[30px] mx-[60px] translate-y-[30px]' />
                                    <span className='font-bold text-[20px] absolute top-[65px] left-[10px]'>
                                        Reading Mask
                                    </span>
                                </div>
                                <div onClick={() => setColor_click18(color_click18 ? false : true)} className={style.divcha18}>
                                    <AiFillBook className='text-[30px] mx-[60px] translate-y-[30px]' />
                                    <span className='font-bold text-[20px] absolute top-[65px] left-[4px]'>
                                        Highlight Hover
                                    </span>
                                </div>

                            </div>
                            <div className=' flex  w-[550px]  flex mx-[20px] my-[10px]'>
                                <div onClick={() => setColor_click19(color_click19 ? false : true)} className={style.divcha19}>
                                    <BiTargetLock className='text-[30px] mx-[60px] translate-y-[20px]' />
                                    <span className='font-bold text-[20px] absolute top-[65px] left-[5px]'>Highlight Focus</span>
                                </div>
                                <div onClick={() => setColor_click20(color_click20 ? false : true)} className={style.divcha20}>
                                    <FaHandPointer className='text-[30px] mx-[60px] translate-y-[30px]' />
                                    <span className='font-bold text-[18px] absolute top-[65px] left-[10px]'>
                                        Big Black Cursor
                                    </span>
                                </div>
                                <div onClick={() => setColor_click21(color_click21 ? false : true)} className={style.divcha21}>
                                    <FaRegHandPointer className='text-[30px] mx-[60px] translate-y-[30px]' />
                                    <span className='font-bold text-[18px] absolute top-[65px] left-[10px]'>
                                        Big White Cursor
                                    </span>
                                </div>

                            </div>
                            <div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='m_m w-full hidden max-lg:block my-[60px]'>
                <h1 className='text-[30px] text-white font-bold justify-center items-center absolute top-[360px] left-[80px]'>Bundle up(& save )</h1>
                <p className='text-[20px] text-white font-bold absolute top-[410px] left-[60px]'>Take up to $50 off on all orders!</p>
                <li className='w-[200px] flex items-center justify-center font-bold text-white h-[60px] bg-[#153A5B] absolute top-[480px]  left-[100px] text-[20px] hover:bg-white hover:text-[#153A5B] hover:border-2 hover:border-[#153A5B] '> Shop Now</li>
            </div>
        </>

    )
}

export default Main