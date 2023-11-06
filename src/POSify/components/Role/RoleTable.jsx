import React from 'react';
import RoleTableRow from './RoleTableRow';

export const RoleTable = ({ availablePermissions }) => {
  return (
    <div className="overflow-x-auto overflow-y-auto shadow-2xl">
      <table className="min-w-full mt-5 text-sm bg-white divide-y-2 divide-gray-200">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="w-10 px-4 py-2 font-medium text-left text-gray-900 left whitespace-nowrap">
              Permiso
            </th>
            <th className="w-10 px-4 py-2 font-medium text-left text-gray-900 left whitespace-nowrap">
              Acciones
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {availablePermissions.map((permission) => (
            <RoleTableRow
              key={permission.id}
              permission={permission}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
