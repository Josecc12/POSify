import { fireEvent, render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { useNavigate } from 'react-router-dom';
import { InventoryTableRow } from '../../../../src/POSify/components/Inventory/InventoryTableRow';
import userEvent from '@testing-library/user-event';


jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('InventoryTableRow', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    const props = {
        id: 1,
        name: 'Test Item',
        category: 'Test Category',
        price: 10.99,
        cost: 5.99,
        utility: 2.99,
        stock: 10,
    };

    it('renders the component with the correct props', () => {
        const {getByText } =render(<InventoryTableRow {...props} />);

        expect(screen.getByText(props.name)).toBeInTheDocument();
        expect(screen.getByText(props.category)).toBeInTheDocument();
        expect(screen.getByText(props.price)).toBeInTheDocument();
        expect(screen.getByText(props.cost)).toBeInTheDocument();
    });

    it('navigates to the correct URL when clicked', () => {
        // Mock the navigate function
        const mockNavigate = jest.fn();
        jest.requireMock('react-router-dom').useNavigate.mockReturnValue(mockNavigate);
        const { getByRole } = render(<InventoryTableRow {...props} />);

        // Find the table row by its role
        const tableRow = getByRole('row');

        // Simulate a click event on the table row
        fireEvent.click(tableRow);

        // Check if the navigate function was called with the correct URL
        expect(mockNavigate).toHaveBeenCalledWith('/articles/list/id=1');
    });

});