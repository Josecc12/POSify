import React, { useEffect } from 'react'
import { PosifyLayout } from '../../layout/PosifyLayout'
import { useNavigate } from 'react-router';
import { BsFillTrashFill } from "react-icons/bs";
import { useForm } from '../../hooks/useForm';
import { usePosStore } from '../../hooks/usePos';

export const EmployeeDetailsPage = () => {

  const navigate = useNavigate();

  const { statrtLoadingRole, roles , startSavingEmployee } = usePosStore()

  const { name, email, phoneNumber, role, password, onInputChange , formState} = useForm({
    name: '',
    email: '',
    phoneNumber: '',
    role: '',
    password: '',
  })

  

  const onSave = () => {
    startSavingEmployee(formState);
    navigate(-1);
      
  }

  useEffect(() => {

    statrtLoadingRole()

  }, [])

  const handleRoleChange = (event) => {
    const selectedValue = event.target.value;
    // Busca el objeto de categoría que coincide con el valor seleccionado
    const selectedRole = roles.find((role) => role.name === selectedValue);
    onInputChange({ target: { name: 'role', value: selectedRole._id } });
  };


  


  return (
    <PosifyLayout >
      <div className="h-full max-h-screen p-6 overflow-x-auto border-gray-400 border-solid">

        <div className='w-full p-5 shadow-2xl lg:w-4/6'>

          {/*Product details*/}

          <div className="flow-root">

            <h2 className='mb-5 text-xl font-semibold'>Employee Details</h2>
            <dl className="-my-3 text-sm divide-y divide-gray-100">

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 ">Name</dt>
                <input
                  name='name'
                  value={name}
                  onChange={onInputChange}
                  type="text"
                  placeholder="Product Name"
                  className="w-full pl-2 mt-1 border-gray-200 rounded-md shadow-sm h-7 sm:text-sm "
                />
              </div>


              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 ">Email</dt>
                <input
                  name='email'
                  value={email}
                  onChange={onInputChange}
                  type="text"
                  placeholder="Product Name"
                  className="w-full pl-2 mt-1 border-gray-200 rounded-md shadow-sm h-7 sm:text-sm "
                />
              </div>


              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 ">Phone Number</dt>
                <input
                  name='phoneNumber'
                  value={phoneNumber}
                  onChange={onInputChange}
                  type="text"
                  placeholder="Product Name"
                  className="w-full pl-2 mt-1 border-gray-200 rounded-md shadow-sm h-7 sm:text-sm "
                />
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Role</dt>
                <div>


                  <select

                    className="h-6 mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                    onChange={handleRoleChange}
                   
                  >
                    <option value="">Select a Role</option>
                    {
                      roles.map((role) => (
                        <option key={role._id} >{role.name}</option>
                      ))
                    }
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 ">Password</dt>
                <input
                  name='password'
                  value={password}
                  onChange={onInputChange}
                  type="password"
                  placeholder="Product Name"
                  className="w-full pl-2 mt-1 border-gray-200 rounded-md shadow-sm h-7 sm:text-sm "
                />
              </div>


            </dl>
          </div>

        </div>



        {/*Buttons*/}

        <div className='flex justify-between w-full my-4 lg:w-4/6 md:my-0 md:mt-4'>

          <div>
            <button
              className="inline-block w-10 h-full px-3 py-3 text-sm font-medium text-white bg-red-600 border border-red-600 rounded sm:w-max hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
            >
              <BsFillTrashFill className='text-center' />

            </button>

          </div>

          <div className='flex justify-end w-2/4 jus'>
            <button
              className="inline-block w-full px-2 py-3 text-sm font-medium text-white border rounded border-slate-600 bg-slate-600 sm:w-full hover:bg-transparent hover:text-slate-600 focus:outline-none focus:ring active:text-slate-500 "
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button
              className="inline-block w-full px-3 py-3 ml-2 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded sm:w-full hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              onClick={onSave}
            >
              Save
            </button>

          </div>


        </div>


      </div>
    </PosifyLayout>
  )
}
