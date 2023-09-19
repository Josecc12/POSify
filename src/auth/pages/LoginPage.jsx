import React from 'react'
import { BsShop } from 'react-icons/bs'

export const LoginPage = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-slate-900">
                <div className="bg-slate-800  text-white shadow-md rounded px-8 py-6 w-full max-w-md mx-3">
                    <div className="flex flex-col justify-center items-center ">
                        <BsShop className='text-center text-6xl mb-3 sm:text-9xl' />
                        <h1 className='font-bold  mb-4 text-center text-sm sm:text-xl'>Sing in to your account</h1>
                    </div>
                    <form className='mb-4'>

                        <div className="mb-4 font-medium">
                            <label>Email address</label>
                            <input type="email" className="mt-2 px-3 py-2 block w-full bg-slate-600 border rounded-md shadow-sm
                                                             focus:ring focus:ring-blue-700 focus:outline-none"/>
                        </div>


                        <div className="mb-6 font-medium">
                            <div className="flex justify-between">
                                <label>Password</label>
                                <label className='text-violet-600 hover:text-violet-200' >Forgot password?</label>
                            </div>
                            <input type="password" className="mt-2 px-3 py-2 block w-full bg-slate-600 border rounded-md shadow-sm
                                                             focus:ring focus:ring-blue-700 focus:outline-none"/>
                        </div>

                        <button className='w-full bg-violet-500 hover:bg-violet-400 rounded-xl h-10 font-semibold'>Sing in</button>
                    </form>

                    <p className='text-center text-gray-400 '> Not a member?
                        <span className='text-violet-600 pl-2 hover:text-violet-200'>Contact with us</span>
                    </p>

                </div>
            </div>

        </>
    )
}
