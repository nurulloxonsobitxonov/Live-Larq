import React from 'react'
import img1 from "../images/1.jpg"
import img2 from "../images/img2.png"
import { Link } from "react-router-dom"

function Justify() {
    const style = {
        big_div: "grid grid-cols-2 w-[94pc]  mx-[100px] my-[50px] max-lg:hidden",
        img1: "w-[400px] h-[400px] rounded max-md:w-[200px] max-md:h-[200px] max-md:translate-y-[50px]",
        img2: "w-[600px] h-[500px] rounded-2xl max-md:w-[300px] max-md:h-[250px] max-md:my-[20px]",
        div1: "w-[700px] h-[500px] bg-[#F6F6F6] relative max-md:w-[350px] max-md:h-[300px] ",
        div2: "w-[750px] h-[500px] bg-[#EFF5F9] relative max-md:w-[350px] max-md:h-[300px] max-md:my-[30px]",
        span1: "text-[40px] absolute text-[#153A5B] font-bold top-[100px] right-[50px] max-md:text-[20px] max-md:top-[80px]  max-md:right-[30px]",
        p1: "text-[28px] text-[#5A5E60] absolute right-[110px] bottom-[120px]  max-md:text-[18px]  max-md:right-[34px]  max-md:top-[150px]",
        span2: "text-[40px] absolute text-[#153A5B] font-bold top-[100px] right-[150px] max-md:text-[20px] max-md:top-[70px]  max-md:right-[60px]",
        p2: "text-[28px] text-[#5A5E60] absolute right-[140px] bottom-[160px] max-md:text-[18px]  max-md:right-[34px]  max-md:top-[150px]",
        underline: "text-[20px] underline text-[#153A5B] font-bold absolute right-[50px] bottom-[40px] hover:text-[#666666] cursor-pointer  max-md:right-[20px]"
    }
    return (
        <>
            <div>
                <div className={style.big_div}>
                    <div className={style.div1}>
                        <img className={style.img1} src={img1} alt="" />
                        <p className={style.span1}>LARQ Pitcher <br /> PureVis™</p>
                        <p className={style.p1}>Take hydration <br /> into your own <br /> hands</p>
                        <span className={style.underline}><Link to="/shop4">Shop now</Link> </span>

                    </div>
                    <div className={style.div2}>
                        <img className={style.img2} src={img2} alt="" />
                        <span className={style.span2}>LARQ Bottle <br /> Filtered</span>
                        <p className={style.p2}>Take hydration into <br /> your own hands.</p>
                        <span className={style.underline}>Shop now</span>

                    </div>
                </div>


            </div>
            <div className='hidden max-lg:block my-[630px] absolute left-[35px]'>
                <div className='w-[320px] h-[300px] bg-[#EFF5F9]'>
                    <img className={style.img1} src={img1} alt="" />
                    <p className="text-[20px] top-[80px] absolute right-[30px]">LARQ Pitcher <br /> PureVis™</p>
                    <p className={style.p1}>Take hydration <br /> into your own <br /> hands</p>
                </div>
                <div className='w-[320px] h-[300px] my-[30px] bg-[#EFF5F9] relative'>
                    <img className={style.img2} src={img2} alt="" />
                    <span className="text-[20px] text-[#153A5B] absolute top-[70px] right-[60px]">LARQ Bottle <br /> Filtered</span>
                    <p className="text-[18px] absolute right-[50px] top-[150px] text-[#5A5E60]">Take hydration <br />  into your own <br /> hands.</p>
                </div>
            </div>
        </>

    )
}

export default Justify