import React from 'react'
import { BsShop } from 'react-icons/bs'
import { useForm } from '../../hooks/useForm'
import { usePosStore } from '../../hooks/usePos'

export const LoginPage = () => {

    const { startLogin } = usePosStore();

    const { email, password, onInputChange } = useForm({
        email: '',
        password: ''
    })

    const onLogin = (e) => {
        e.preventDefault();
        startLogin(email, password);
    }


    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-slate-900">
                <div className="w-full max-w-md px-8 py-6 mx-3 text-white rounded shadow-md bg-slate-800">
                    <div className="flex flex-col items-center justify-center ">
                        <BsShop className='mb-3 text-6xl text-center sm:text-9xl' />
                        <h1 className='mb-4 text-sm font-bold text-center sm:text-xl'>Sing in to your account</h1>
                    </div>
                    <form className='mb-4'>

                        <div className="mb-4 font-medium">
                            <label>Email address</label>
                            <input
                                name='email'
                                value={email}
                                onChange={onInputChange}
                                type="email" className="block w-full px-3 py-2 mt-2 border rounded-md shadow-sm bg-slate-600 focus:ring focus:ring-blue-700 focus:outline-none" />
                        </div>


                        <div className="mb-6 font-medium">
                            <div className="flex justify-between">
                                <label>Password</label>
                                <label className='text-violet-600 hover:text-violet-200' >Forgot password?</label>
                            </div>
                            <input
                                name='password'
                                value={password}
                                onChange={onInputChange}
                                type="password" className="block w-full px-3 py-2 mt-2 border rounded-md shadow-sm bg-slate-600 focus:ring focus:ring-blue-700 focus:outline-none" />
                        </div>

                        <button
                            onClick={onLogin}
                            className='w-full h-10 font-semibold bg-violet-500 hover:bg-violet-400 rounded-xl'>
                            Sing in
                        </button>
                    </form>

                    <p className='text-center text-gray-400 '> Not a member?
                        <span className='pl-2 text-violet-600 hover:text-violet-200'>Contact with us</span>
                    </p>

                </div>
            </div>

        </>
    )
}
