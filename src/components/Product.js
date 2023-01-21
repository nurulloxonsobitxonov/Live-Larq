import React, { useContext } from 'react'
import { BsCartPlus } from "react-icons/bs"
import { TiTick } from 'react-icons/ti'
import { ProductContext } from '../context/ProductContext'
import { addToCart } from "../context/ProductContext"
import Star from "../images/stars.jpg"
import { CiCoffeeCup } from "react-icons/ci"


function Product({ product }) {
    const { state, dispatch } = useContext(ProductContext)
    const { cart } = state
    // console.log("state >>", state)
    const style = {
        card: "w-[250px] h-[400px] bg-blue-300 m-3 rounded-[10px] overflow-hidden group ",
        wrap: "flex h-full",
        textWrap: "w-3/4 bg-red-300 h-full flex  flex-col text-[16px] pt-[10px] pl-2 ",
        h1: "text-[22px] font-bold",
        h2: "text-[18px]",
        img: "w-full h-4/5 object-cover ",
        icon: "text-[30px] mx-auto mt-[20px] group-hover:scale-[1.1] duration-150 cursor-pointer",
        icon2: "text-[30px] mx-auto mt-[20px] group-hover:scale-[1.1] duration-150 cursor-pointer",
        wanBigDiv: "w-[100%] h-auto flex ",
        WanRight: "w-[60%] h-auto  flex  justify-center",
        WanLeft: "w-[40%] h-auto flex ",
        btn: "w-full h-[50px] border-[2px] text-[#FFF] font-bold text-[17px] hover:text-[#153a5b] hover:bg-transparent bg-[#153a5b] hover: hover:border-[#153a5b] mt-[20px]",
    }
    // const AddProduct = (item) => {

    //     dispatch({ type: "ADD__CART", payload: item })
    // }
    return (
        <>
            <div className="w-full h-auto  flex flex-col max-sm:hidden">
                <div className="mt-[51px] w-full h-auto flex flex-col">
                    <div className={style.wanBigDiv}>
                        <div className={style.WanRight}>
                            <div className="w-[700px] h-[700px] bg-[#F8F8F8] ml-[30px] mt-[40px]">
                                <img className="w-[700px] h-[700px]" src={product.data.productImage} alt="" />
                            </div>
                        </div>
                        <div className={style.WanLeft}>
                            <div className="w-[510px] h-[700px] flex flex-col mt-[40px]">
                                <h1 className="text-[34px] text-[#153a5b] font-bold flex font-sans">{product.data.productName.split("").splice(0, 14).join("")}</h1>
                                <span className="text-[#153a5b] text-[21px] font-bold mt-[7px] font-sans">${product.data.productPrice}</span>
                                <p className='text-[#5a5e60] mt-[5px] text-[16px] font-sans'>Or 4 interest-free installments of $24.75</p>
                                <div className="flex w-[300px] h-[60px] items-center ml-[-10px]">
                                    <img className="w-[130px] h-[50px]" src={Star} alt="" />
                                    <p className="text-[16px] text-[#000000]">5450 reviews</p>
                                </div>
                                <div className="flex w-[500px] h-[60px] items-center justify-between ">
                                    <p className="text-[16px] text-[#153a5b] font-sans font-bold ">Insulation</p>
                                    <p className="text-[16px] text-[#153a5b] underline hover:no-underline">Learn more</p>
                                </div>
                                <div className="w-[510px] h-[90px]  flex">
                                    <div className="w-[245px] h-[90px] border-[2px] border-[#153A5B] flex">
                                        <div className="w-[60px] h-[90px] flex justify-center items-center text-[40px] text-[#8A9DAD]  ">
                                            <CiCoffeeCup />
                                        </div>
                                        <div className="w-[120px] h-[90px] flex flex-col">
                                            <h1 className="text-[14px] text-[#153a5b] font-bold mt-[15px]">Insulated</h1>

                                            <p className="text-[13px] text-[#153a5b]">24 hours cold and 12 hot</p>
                                        </div>
                                    </div>
                                    <div className="w-[245px] h-[90px] ml-[12px]  border-[1px] border-[#E5E5E5] hover:border-[#000] flex">
                                        <div className="w-[60px] h-[90px] flex justify-center items-center text-[40px] text-[#8A9DAD]  ">
                                            <CiCoffeeCup />
                                        </div>
                                        <div className="w-[120px] h-[90px] flex flex-col">
                                            <h1 className="text-[14px] text-[#153a5b] font-bold mt-[15px]">Insulated</h1>
                                            <p className="text-[13px] text-[#153a5b]">24 hours cold and 12 hot</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[510px] h-[85px] mt-[30px] ">
                                    <h1 className="text-[#153a5b] text-[16px] font-bold">Size</h1>
                                    <button className="w-[245px] h-[54px] text-[16px] text-[#153a5b] font-bold  border-[2px] border-[#153a5b] mt-[5px]" >17 oz</button>
                                    <button className="w-[245px] h-[54px] text-[16px] text-[#153a5b] font-bold  ml-[12px] border-[1px] hover:border-[#000] border-[#E5E5E5]">25 oz</button>
                                </div>
                                <div className="w-full h-[30px] mt-[30px] ">
                                    <input className="w-[17px] h-[17px]" type="radio" name="" id="" />
                                    <input className="w-[17px] h-[17px] ml-[6px]" type="radio" name="" id="" />
                                    <input className="w-[17px] h-[17px] ml-[6px]" type="radio" name="" id="" />
                                    <input className="w-[17px] h-[17px] ml-[6px]" type="radio" name="" id="" />
                                    <input className="w-[17px] h-[17px] ml-[6px]" type="radio" name="" id="" />
                                </div>
                                <div className="w-full h-[120px] mt-[25px] flex flex-col ">
                                    <button className="w-full h-[50px] border-[2px] text-[17px] tracking-[1px] font-bold font-sans text-[#153a5b] hover:border-[#ccc] border-[#153a5b]">Personalize</button>
                                    <button className={style.btn} onClick={() => dispatch(addToCart(product, cart))}>Add to cart — $99 </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Product