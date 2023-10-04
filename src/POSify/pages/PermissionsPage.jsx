import React from 'react';
import { PosifyLayout } from '../../layout/PosifyLayout';
import { PermissionsTable } from '../components/Permissions/PermissionsTable';


// import PermissionsTable from './PermissionsTable';

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
        <h2 className="mb-4 text-2xl font-bold">Lista de Roles:</h2>

        <div>
          <div className="overflow-x-auto overflow-y-auto shadow-2xl">
            <PermissionsTable rolesData={rolesData} />
          </div>

        </div>
      </div>
      
      

    </PosifyLayout>
  );
};

export default PermissionsPage;
