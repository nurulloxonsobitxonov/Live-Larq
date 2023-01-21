import React from 'react'
import basq from "../images/basq.jpg"
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import nail from "../images/nail.jpg"
import screen from "../images/shot.png"

function Basq() {
    const style = {
        basq: "my-[40pc] relative max-lg:hidden",
        img: "w-[350px] h-[350px]",
        li: "text-[23px] w-[250px] justify-center items-center flex h-[50px] font-bold text-white bg-[#153A5B] absolute bottom-[-100px] hover:bg-white border-[3px] border-[#153A5B] hover:text-[#153A5B] cursor-pointer duration-500"
    }
    return (
        <>
            <div className={style.basq}>
                <div className='w-[200px] h-[100px] mx-[680px]'>
                    <img className='' src={basq} alt="" />
                </div>
                <div className='mx-[100px] absolute right-[200px] top-[400px] '>
                    <h1 className='text-[46px] font-bold text-[#153A5B] '>Get inspired</h1>
                    <p className='text-[#5A5E60] text-[25px] '>Satisfy all of your inspiration needs in one <br /> place. We're covering top travel destinations, <br /> product line-ups, interviews with experts in <br /> different industries, news from us (your <br /> favorite self-cleaning bottle people), and <br /> more.

                    </p>
                    <li className={style.li}>
                        Read More
                    </li>
                </div>

                <div className=' w-[450px] my-[100px] h-[730px] mx-[450px] grid'>
                    <img className='absolute w-[350px] left-[80px] h-[715px]' src={screen} alt="" />
                    <img className={style.img} src={img1} alt="" />
                    <img className="w-[350px] h-[350px] " src={img2} alt="" />
                </div>
                <div className='flex m-[200px]'>
                    <img className="w-[80px] h-[70px]" src={nail} alt="" />
                    <p className='py-[30px] text-[30px] text-[#153A5B] font-bold translate-x-[100px]'>Say good bye to your reusable bottles persistent <br />
                        funk -- and hello to this Jetsons-worthy update</p>
                </div>


            </div>
            <div className='translate-y-[3100px] absolute left-[10px] hidden max-lg:block'>
                <img className='w-[205px] translate-y-[-150px] h-[500px]' src={screen} alt="" />
                <div className='flex flex-col translate-y-[-650px] absolute left-[215px] justify-between h-[510px]'>
                    <img className='w-[170px] h-[250px]' src={img1} alt="" />
                    <img className='w-[170px] h-[250px]' src={img2} alt="" />
                </div>
                <div className='translate-y-[-60px]'>
                    <span className='text-[25px] text-[#153A5B] font-bold translate-y-[20px] px-[120px]'>
                        Get inspired
                    </span>
                    <p className='text-[#5A5E60] translate-y-[10px] text-[16px] translate-x-[10px]'>Satisfy all of your inspiration needs in one place. <br />  We're covering top travel destinations, product line-  <br /> ups, interviews with experts in different industries, <br />  news from us (your  favorite self-cleaning bottle <br /> <span className='px-[100px]'>  people), and  more.  </span>
                    </p>
                </div>
                <div className='flex text-[20px] font-bold text-[#153A5B] translate-y-[40px]'>
                    <img className='w-[50px] h-[40px]' src={nail} alt="" />
                    <p>Say good bye to your reusable <br /> bottles persistent
                        funk -- and <br /> hello to this Jetsons-worthy <br /> update</p>
                </div>
            </div>
        </>
    )
}

export default Basq