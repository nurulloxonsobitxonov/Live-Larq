import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase/firebaseConfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import Footer from '../components/Footer';
function Register() {
    const navigate = useNavigate()

    const style = {

        input: "block border border-grey-light outline-none w-[370px] h-[45px] p-3 mt-[10px]  mb-4",
        inputfile: "w-full h-full opacity-0 cursor-pointer bg-none",


    }

    const registerFunc = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].files[0]
        console.log(file);
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            console.log(res);
            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL
                        })
                        await setDoc(doc(db, "users", res.user.uid), {
                            name: displayName,
                            email: email,
                            id: res.user.uid,
                            photoURL: downloadURL

                        });
                        navigate("/")
                    });
                }
            );

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <div className="w-[100%] h-[200vh] mt-[51px] max-sm:hidden">
                <div className="w-[100%] h-[150vh]  flex flex-col items-center ">

                    <h1 className="text-[40px] text-[#153A5B] font-bold mt-[60px]">New Account</h1>
                    <form onSubmit={registerFunc} className=" w-[55%] h-[100vh]  mt-[50px]  ">
                        <div className="grid grid-cols-2 gap-4 ">
                            <div className="">
                                <h1 className="text-[16px] text-[#5A5B60]">Username</h1>
                                <input className={style.input} type="text" />
                            </div>
                            <div className="">
                                <h1 className="text-[16px] text-[#5A5B60]">Email</h1>
                                <input className={style.input} type="text" />
                            </div>
                            <div className="">
                                <h1 className="text-[16px] text-[#5A5B60]">Password</h1>
                                <input className={style.input} type="password" />
                            </div>
                            <div className="">
                                <h1 className="text-[16px] text-[#5A5B60]">File</h1>
                                <input className={style.input} type="file" />
                            </div>


                            <button
                                type="submit"
                                className="w-[243px] h-[40px]  text-[#FFFFFF] duration-500 font-bold bg-[#153A5B] mt-[30px]  border-[2px] border-transparent hover:bg-white hover:text-[#153A5B] hover:border-[#153A5B]"
                            >Register</button>
                        </div>

                        <div className={style.footer_login}>

                        </div>
                    </form>


                </div>
                <Footer />
            </div>

        </>

    )
}

export default Register