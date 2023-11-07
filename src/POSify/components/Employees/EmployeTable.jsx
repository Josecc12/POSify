import React, { useEffect } from 'react'
import { EmployeTableRow } from './EmployeTableRow'
import { usePosStore } from '../../../hooks/usePos';

const employeeData = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "123-456-7890",
      role: "Developer"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phoneNumber: "987-654-3210",
      role: "Designer"
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      phoneNumber: "555-123-4567",
      role: "Manager"
    },
    // Add more employees as needed
  ];
  

export const EmployeTable = () => {

  const { startLoadingEmployees , employees } = usePosStore();

  useEffect(() => {

    startLoadingEmployees();
  }, [])  

  return (
    <>
            <table className="w-full mt-5 text-sm bg-white divide-y-2 divide-gray-200 min-w-max">



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
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                            Email
                        </th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                            Phone
                        </th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                            Role
                        </th>
                        

                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {employees.map((item, index) => (
                        <EmployeTableRow key={index} {...item} id={item._id} role={item.role.name} />
                    ))}
                </tbody>
            </table>


        </>
  )
}
