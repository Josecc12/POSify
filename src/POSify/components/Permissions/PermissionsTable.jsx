import React from 'react';
import PermissionsTableRow from './PermissionsTableRow';

export const PermissionsTable = ({ rolesData }) => {
  return (
    <div className="overflow-x-auto overflow-y-auto shadow-2xl">
      <table className="min-w-full mt-5 text-sm bg-white divide-y-2 divide-gray-200">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="w-10 px-4 py-2 font-medium text-left text-gray-900 left whitespace-nowrap">
              Rol
            </th>
            <th className="px-4 py-2 font-medium text-left text-gray-900 left whitespace-nowrap">
              Permisos
            </th>
            <th className="w-10 px-4 py-2"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rolesData.map((role) => (
            <PermissionsTableRow key={role.id} role={role} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
