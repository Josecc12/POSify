import React, { useState } from 'react'

export const ViewInPOS = () => {

    const [imagePreview, setImagePreview] = useState(null);

    const onImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    return (
        <>


            {/*Images*/}
            <div className='w-full p-5 shadow-2xl lg:w-4/6'>
                <div className="flow-root divide-y divide-gray-100">


                    <h2 className='mt-10 text-xl font-semibold'>View in POS</h2>
                    <hr />

                    <div className='my-4'>
                        <label className="block text-sm text-gray-500 ">Image</label>

                        <label className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                            </svg>

                            <h2 className="mt-1 font-medium tracking-wide text-gray-700 ">Image </h2>

                            <p className="mt-2 text-xs tracking-wide text-gray-500 ">Upload or darg & drop your file SVG, PNG, JPG or GIF. </p>

                            <input type="file" className="hidden"
                                onChange={onImageChange}
                                accept="image/*" />

                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="h-auto max-w-full mt-4"
                                />
                            )}

                        </label>
                    </div>


                </div >


            </div>

        </>
    )
}
