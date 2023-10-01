import React from 'react';

const RoleTableRow = ({ permission, isSelected, onPermissionChange }) => {
  return (
    <tr>
      <td className="px-4 py-2 border">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onPermissionChange(permission)}
          className="w-5 h-5 border-gray-300 rounded"
        />
        {permission}
      </td>
      {/* Otras celdas de la fila */}
    </tr>
  );
};

export default RoleTableRow; // Exporta el componente correctamente
