import React from 'react';
import { useMenuStore } from '../../hooks/useMenu';
import { PosifyLayout } from '../../layout/PosifyLayout';
import ListEmployee from '../components/Employees/ListEmployee'; // Importa el componente AgregarEmpleado

export const EmployeesPage = () => {
    const { isMenuOpen } = useMenuStore();

    return (
        <PosifyLayout>
            <div className="content">
                 <ListEmployee/>
            </div>
        </PosifyLayout>
    );
};
