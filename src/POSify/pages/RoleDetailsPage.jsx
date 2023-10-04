import React from 'react';
import { PosifyLayout } from '../../layout/PosifyLayout';
import { RoleTable } from '../components/Role/RoleTable';

// Datos de prueba (reemplaza con tus propios datos)
const availablePermissions = [
  {
    id: 1,
    name: 'Ver',
  },
  {
    id: 2,
    name: 'Editar',
  },
  {
    id: 3,
    name: 'Crear'
  },
  {
    id: 4,
    name: 'Eliminar'
  },
]


const roleDetails = {
  id: 1,
  name: 'Admin',
  currentPermissions: ['Ver', 'Editar', 'Eliminar'],
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
          
          <div className="overflow-x-auto overflow-y-auto shadow-2xl">
            <RoleTable availablePermissions={availablePermissions} />
          </div>

        </div>
      </div>
    </PosifyLayout>
  );
};

export default RoleDetailsPage;
