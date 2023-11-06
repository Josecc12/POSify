import React from 'react';
import {PermissionsTableRow} from './PermissionsTableRow';

export const PermissionsTable = ({ data }) => {
  console.log(data);
  return (
    <table className="min-w-full mt-5 text-sm bg-white divide-y-2 divide-gray-200">

      <thead className="ltr:text-left rtl:text-right ">
        <tr>
          
          <th className="w-10 px-4 py-2 font-medium text-left text-gray-900 left whitespace-nowrap">
            <input
              type="checkbox"
              id="SelectAll"
              className="w-5 h-5 border-gray-300 rounded"
            />

          </th>
          <th className="w-10 px-4 py-2 font-medium text-left text-gray-900 left whitespace-nowrap">
            Rol
          </th>
          <th className="px-4 py-2 font-medium text-left text-gray-900 left whitespace-nowrap">
            Access
          </th>
          <th className="px-4 py-2 font-medium text-right text-gray-900 whitespace-nowrap">
            Employees
          </th>
          <th className="w-10 px-4 py-2"></th>
        </tr>
        
      </thead>


      <tbody className="divide-y divide-gray-200">
        {
          data.map((item, index) => (
            <PermissionsTableRow key={index} {...item} />
          ))
        }
      </tbody>
    </table>

  );
};
