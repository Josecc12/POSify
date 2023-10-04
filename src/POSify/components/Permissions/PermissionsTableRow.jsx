import React from 'react';
import { Link } from 'react-router-dom';

const PermissionsTableRow = ({ role }) => {
  return (
    <tr key={role.id}>
      <td className="px-4 py-2 border">{role.name}</td>
      <td className="px-4 py-2 border">
        {role.permissions.join(', ')}
      </td>
      <td className="px-4 py-2 border">
        {/* Utiliza Link para redireccionar a RoleDetailsPage */}
        <Link
          to={`/roledetailspage?id=${role.id}`} // Pasa el ID del rol en la URL
          className="px-2 py-1 text-white bg-indigo-600 rounded hover:bg-indigo-700"
        >
          View
        </Link>
      </td>
    </tr>
  );
};

export default PermissionsTableRow;
