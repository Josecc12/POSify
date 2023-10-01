import React, { useState } from 'react';
import RoleTableRow from './RoleTableRow'; // Ajusta la ruta si es necesario

export const RoleTable = ({ availablePermissions }) => {
  // Estado para mantener el estado de selección de cada permiso
  const [selectedPermissions, setSelectedPermissions] = useState({});

  // Función para manejar el cambio de selección de permiso
  const handlePermissionChange = (permission) => {
    setSelectedPermissions({
      ...selectedPermissions,
      [permission]: !selectedPermissions[permission],
    });
  };

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
              key={permission}
              permission={permission}
              isSelected={selectedPermissions[permission] || false}
              onPermissionChange={handlePermissionChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

