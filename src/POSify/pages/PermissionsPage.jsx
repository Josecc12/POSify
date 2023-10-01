import React from 'react';
import { PosifyLayout } from '../../layout/PosifyLayout';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Importa Link de React Router

// Datos de prueba (reemplaza con tus propios datos)
const rolesData = [
  {
    id: 1,
    name: 'Admin',
    permissions: ['Ver', 'Editar', 'Eliminar'],
  },
  {
    id: 2,
    name: 'Usuario',
    permissions: ['Ver'],
  },
  // Agrega más datos de roles y permisos aquí
];

export const PermissionsPage = () => {
  return (
    <PosifyLayout>
      <div className="h-full max-h-screen p-6 overflow-x-auto border-gray-400 border-solid">
        <div className="left-0 flex flex-col flex-wrap justify-end w-full sm:flex-row lg:flex-nowrap">
          <div className='flex flex-col-reverse sm:flex-row '>

            <div className='flex flex-row-reverse my-4'>
              <input type="text" className='self-center w-full mx-2 text-sm text-gray-700 border-indigo-500 rounded h-7' />
              <AiOutlineSearch className='self-center text-2xl text-indigo-600' />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto overflow-y-auto shadow-2xl">
          
          <table className="w-full border border-collapse border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="w-20 px-4 py-2 text-left">Rol</th>
                <th className="px-4 py-2 text-left">Permisos</th>
                <th className="w-10 px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {rolesData.map((role) => (
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PosifyLayout>
  );
};

export default PermissionsPage;
