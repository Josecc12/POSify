import React from 'react';
import { useMenuStore } from '../../hooks/useMenu';
import { PosifyLayout } from '../../layout/PosifyLayout';
import AgregarEmpleado from '../components/Employees/AddEmployee'; // Importa el componente AgregarEmpleado

export const EmployeesPage = () => {
    const { isMenuOpen } = useMenuStore();

    return (
        <PosifyLayout>
            <div className="content">
                 <AgregarEmpleado />
            </div>
        </PosifyLayout>
    );
};
