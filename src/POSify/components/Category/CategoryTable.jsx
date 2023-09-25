import React from 'react'

export const CategoryTable = () => {
    return (
        <>
            <table className="mt-5 text-sm bg-white divide-y-2 divide-gray-200 min-w-max">



                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="w-10 px-4 py-2 font-medium text-left text-gray-900 left whitespace-nowrap">
                            <input
                                type="checkbox"
                                id="SelectAll"
                                className="w-5 h-5 border-gray-300 rounded"
                            />

                        </th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                            Name
                        </th>

                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="px-4 py-2">
                            <label className="sr-only">1</label>
                            <input
                                className="w-5 h-5 border-gray-300 rounded"
                                type="checkbox"

                            />
                        </td>

                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">

                            <div className="flex items-center gap-x-2">
                                <img className="object-cover w-10 h-10 rounded-full" src="https://th.bing.com/th/id/R.e961334ca829d0b0530de06e0c63f02d?rik=2FwAkeDuM82R6w&pid=ImgRaw&r=0" alt="" />
                                <div>
                                    <h2 className="font-medium text-gray-800 dark:text-white ">Food</h2>
                                
                                </div>

                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>


        </>
    )
}
