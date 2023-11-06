import React from 'react';

const RoleTableRow = ({ permission }) => {
  return (
    <tr>
      <td className="px-4 py-2 border">
        {permission.name}
      </td>
      <td className="px-4 py-2 border">
        <input
          type="checkbox"
          className="w-5 h-5 border-gray-300 rounded"
        />
      </td>
    </tr>
  );
};

export default RoleTableRow;

