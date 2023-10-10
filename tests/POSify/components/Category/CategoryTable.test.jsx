import React from 'react';
import { render, screen } from '@testing-library/react';
import { CategoryTable } from '../../../../src/POSify/components/Category/CategoryTable';
import { MemoryRouter } from 'react-router-dom';
import { toBeInTheDocument } from '@testing-library/jest-dom';

describe('CategoryTable', () => {
    it('renders a table with the correct headers', () => {
        render(<MemoryRouter>
            <CategoryTable />
        </MemoryRouter>);
        const nameHeader = screen.getByText('Name');
        expect(nameHeader).toBeInTheDocument();
    });

    it('renders a row for each category', () => {
        render(<MemoryRouter>
            <CategoryTable />
        </MemoryRouter>);
        const foodRow = screen.getByText('Food');
        const serviceRow = screen.getByText('Service');
        const drinkRow = screen.getByText('Drink');
        expect(foodRow).toBeInTheDocument();
        expect(serviceRow).toBeInTheDocument();
        expect(drinkRow).toBeInTheDocument();
    });

    it('renders a checkbox for each row', () => {
        render(<MemoryRouter>
            <CategoryTable />
        </MemoryRouter>);
        const checkboxes = screen.getAllByRole('checkbox');
        expect(checkboxes).toHaveLength(3+1);
    });
   
});