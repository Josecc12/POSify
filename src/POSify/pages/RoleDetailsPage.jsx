import React from 'react';
import { PosifyLayout } from '../../layout/PosifyLayout';

// Datos de prueba (reemplaza con tus propios datos)
const roleDetails = {
  id: 1,
  name: 'Admin',
  currentPermissions: ['Ver', 'Editar', 'Eliminar'],
  availablePermissions: ['Ver', 'Editar', 'Eliminar', 'Crear', 'Cambiar Contraseña', 'Otro Permiso'],
};

export const RoleDetailsPage = () => {
  return (
    <PosifyLayout>
      <div className="h-full max-h-screen p-6 overflow-x-auto border-gray-400 border-solid">
        <h2 className="mb-4 text-2xl font-bold">{`ROL: ${roleDetails.name}`}</h2>

        <div className="p-4 mb-4 shadow-lg">
          <h3 className="mb-2 text-lg font-semibold">Permisos actuales:</h3>
          <ul>
            {roleDetails.currentPermissions.map((permission) => (
              <li key={permission}>{permission}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">Permisos disponibles:</h3>
          <table className="w-full border border-collapse border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Permiso</th>
                <th className="w-1/4 px-4 py-2 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {roleDetails.availablePermissions.map((permission) => (
                <tr key={permission}>
                  <td className="px-4 py-2 border">{permission}</td>
                  <td className="px-4 py-2 border">
                    <div className="flex flex-wrap items-center">
                      <button
                        className="px-2 py-1 text-white bg-indigo-600 rounded hover:bg-indigo-700"
                        onClick={() => {
                          // Lógica para agregar el permiso al rol
                          console.log(`Añadir permiso "${permission}" al rol ${roleDetails.name}`);
                        }}
                      >
                        Add
                      </button>
                      <button
                        className="px-2 py-1 ml-2 text-white bg-red-600 rounded hover:bg-red-700"
                        onClick={() => {
                          // Lógica para quitar el permiso del rol
                          console.log(`Quitar permiso "${permission}" del rol ${roleDetails.name}`);
                        }}
                      >
                        Remove
                      </button>
                    </div>
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

export default RoleDetailsPage;
