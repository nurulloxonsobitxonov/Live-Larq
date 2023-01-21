import React, { useState } from 'react'
import { BsChevronDown } from "react-icons/bs"
import logo from "../images/logo-larq.svg"
import { TbWorld } from "react-icons/tb"
import { FiShoppingCart } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { Link } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebaseConfig"
import blue_bottle from "../images/termiz.jpg"
import white from "../images/white.jpg"
import { HiOutlineXMark } from "react-icons/hi2"
import { ProductContext } from '../context/ProductContext';
import Cart from './Cart';
import { AuthContext } from '../context/AuthContext';
import { useEffect, useContext } from 'react';
import black from "../images/black.jpg"
import { AiOutlineMinus } from "react-icons/ai"

function Navbar({ profileName, profileImg }) {


    const [show, setShow] = useState("none")
    const [click, setclick] = useState(false)
    const [translate, setTranslate] = useState(false)
    const [mouseover, setMouseover] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    const { state } = useContext(ProductContext)
    const { currentUser } = useContext(AuthContext)

    const { cart } = state

    const [openSide, setOpenSide] = useState(false)
    useEffect(() => {
        cart.length === 0 && setOpenSide(false)
    }, [cart])



    const AddCartSidebar = () => {
        if (cart.length === 0) return alert("siz hali harid qilmadingiz ")
        if (openSide === false) {
            setOpenSide(true)
        }
        else {
            setOpenSide(false)
        }
    }


    const style = {
        show: `w-[1800px] h-[500px] bg-[#FFFFFF] absolute z-[20000] flex top-[43px] left-[-1205px] transition ease-in-out delay-150 duration-700`,
        p: "text-[18px] py-[2px] text-white",
        chdown: "text-[20px] text-[#99A9B8]",
        p2: "justify-center py-[30px] font-bold items-center flex ",
        nav: "nav w-[100%] z-[100000] fixed h-[60px] top-[0]  bg-white relative max-lg:hidden",
        img_logo: " w-[130px] h-[60px] translate-x-[200px] translate-y-[4px] ",
        justify: "justify-around w-[550px] flex  text-[20px] font-bold text-[#153A5B] absolute right-6 top-4 tracking-wide  ",
        basket: "text-[30px] hover:cursor-pointer ",
        line: "w-[450px] h-[10px] rounded bg-[#E5E5E5] mx-[40px] my-[20px]",
        spancha: "text-[15px] text-[#6F6D6A] px-[190px]",
        little_p: "text-[#5A666A] translate-x-[40px]",
        little_h1: "text-[30px] text-white flex justify-center items-center my-[80px]",
        li: "flex w-[500px] h-[60px] bg-white text-[#153A5B] justify-center items-center hover:bg-[#153A5B] cursor-pointer hover:text-white hover:border-[4px] border-white duration-500",
        product_div: `divcha  w-[100%] h-[400px] absolute translate-y-[-500px] z-10 bg-[#FFFFFF]   ${mouseover ? 'translate-y-[00px]' : 'translate-y-[100px]'} duration-1000 max-lg:hidden`,
        img: "w-[220px] h-[220px]",
        span: "text-[25px] text-[#153A5B] font-bold hover:text-gray-300 cursor-pointer duration-500",
        translate: `hidden max-:block w-[400px] absolute z-[1000] translate-x-[-400px] overflow-y-auto  h-[600px] bg-[#F5F9FC] ${translate ? 'translate-x-[00px]' : 'translate-x-[0px]'} duration-[.8s]`,
        media_img: "w-[150px] h-[140px]"
    }
    return (

        <>
            <div>



                <nav className={style.nav}>
                    <Link to="/">
                        <img className={style.img_logo} src={logo} alt="" />
                    </Link>
                    <div className="w-[600px] max-md:hidden  md:hidden lg:flex xl:flex lg:ml-[360px] xl:ml-[560px] top-[5px] absolute h-[51px]">
                        <h1 className="font-mono ml-[-30px]  py-[10px] text-[19px]">{profileName}</h1>
                        <img src={profileImg} className="w-[40px] border-none  ml-[10px] rounded-full" alt="" />
                        <button className="border text-white font-bold text-[18px] w-[150px] ml-[10px] bg-[#153A5B]  hover:bg-white hover:border-[3px] hover:border-[#153A5B] hover:text-[#153A5B]  p-2  rounded duration-500"
                            onClick={() => signOut(auth)}>Sign Out</button></div>
                    <FaBars onClick={() => setTranslate(translate ? false : true)} className='text-[25px] translate-y-[-40px] hidden max-:block mx-[20px] ' />


                    <div className={style.justify}>
                        <div className='relative w-[auto] h-[50px] cursor-pointer z-[300]' onMouseEnter={() => setShow("block")} onMouseLeave={() => setShow("none")}>
                            <div className='flex'>
                                <span className='products flex hover:text-[#8B827E] cursor-pointer'>Products</span>
                                <BsChevronDown className=' translate-y-[5px] mx-[2px] font-extrabold' />
                            </div>

                            <div className={style.show} style={{ display: `${show}` }}>
                                <div className='flex w-[1100px] translate-x-[150px] translate-y-[70px] justify-between h-[220px] '>
                                    <div className=''>
                                        <img className={style.img} src={blue_bottle} alt="" />
                                        <span className={style.span}>LARQ Pitcher Pure Vis ™</span>
                                        <p>Brilliantly clean water beyond filtration</p>
                                    </div>
                                    <div>

                                        <img className={style.img} src={black} alt="" />
                                        <span className={style.span}>LARQ Pitcher Pure Vis ™</span>
                                        <p>Brilliantly clean water beyond filtration</p>
                                    </div>
                                    <div>
                                        <img className={style.img} src={white} alt="" />
                                        <span className={style.span}>LARQ Pitcher Pure Vis ™</span>
                                        <p>Brilliantly clean water beyond filtration</p>

                                    </div>
                                    <li className='w-[250px] h-[2px] bg-[#EEEEEE] absolute right-[-210px] top-[150px] list-none rotate-90'></li>
                                    <div className='absolute flex flex-col text-[25px] text-[#6F7477] justify-between h-[300px] right-[-300px]'>
                                        <span className='text-[22px] text-[#153A5B] font-bold'>Shop</span>
                                        <span className='hover:text-[#153A5B] cursor-pointer'>All products</span>
                                        <span className='hover:text-[#153A5B] cursor-pointer'>Gift Sets</span>
                                        <span className='hover:text-[#153A5B] cursor-pointer'>Travel Seeze</span>
                                        <span className='hover:text-[#153A5B] cursor-pointer'>Filters</span>
                                        <span className='hover:text-[#153A5B] cursor-pointer'>Accessories</span>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <span className='hover:text-[#8B827E] cursor-pointer'><Link to="/technology">Technology</Link></span>
                        <span className='hover:text-[#8B827E] cursor-pointer'><Link to="/sign">
                            Sign in
                        </Link> </span>
                        <li className='flex'>
                            <span className='flex hover:text-[#8B827E] cursor-pointer'>EN <TbWorld className='my-1.5 text-[18px]' /></span>
                        </li>
                        <div className=' cursor-pointer flex' onClick={AddCartSidebar}>
                            <FiShoppingCart className={style.basket} />{state.cart ? state.cart?.length : 0}
                        </div>

                    </div>
                    {/* <div className={style.sidebar}>
                        <span>Your Cart</span>
                        <p className={style.spancha}>$10 store credit</p>
                        <div className={style.line}><div></div></div>
                        <p className={style.little_p}>You're $200.00 away from $10 in store credit!</p>

                        <h1 className={style.little_h1}>Oh, it appears <br />

                            your cart is empty
                        </h1>
                        <li className={style.li}>SHOP LARQ</li>
                    </div> */}
                </nav>



                <div className={style.translate}>
                    <div>
                        <div>
                            <img className={style.media_img} src={blue_bottle} alt="" />
                            <span className={style.span}>LARQ Pitcher Pure Vis ™</span>
                            <p>Brilliantly clean water beyond filtration</p>
                        </div>
                        <hr />
                        <div>
                            <img className={style.media_img} src={black} alt="" />
                        </div>
                        <hr />

                        <div>
                            <img className={style.media_img} src={white} alt="" />
                        </div>
                    </div>
                </div>
                <Cart className="mt-[51px]" sidebarFunc={AddCartSidebar} openState={openSide} />


            </div >
            <div className='m_nav h-[60px] bg-red-300 flex hidden max-lg:block'>
                <FaBars className='text-[25px] left-[15px] absolute top-[15px]' />
                <img className='w-[100px] items-center flex justify-center absolute left-[170px] top-[15px]' src={logo} alt="" />
                <FiShoppingCart className=' text-[25px] translate-y-[-12px] right-[55px] absolute top-[30px]' />
            </div>
        </>




    )
}

export default Navbar