import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter , useNavigate } from 'react-router-dom';
import { InventoryTableRow } from '../../../../src/POSify/components/Inventory/InventoryTableRow';
import {  toBeInTheDocument } from '@testing-library/jest-dom';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,

}));


describe('InventoryTableRow', () => {


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
        const { getByText } = render(
            <MemoryRouter>
                <table>
                    <tbody>
                        <InventoryTableRow {...props} />
                    </tbody>
                </table>

            </MemoryRouter>
        );

        expect(screen.getByText(props.name)).toBeInTheDocument();
        expect(screen.getByText(props.category)).toBeInTheDocument();
        expect(screen.getByText(props.price)).toBeInTheDocument();
        expect(screen.getByText(props.cost)).toBeInTheDocument();
        
    });

    it('navigates to the correct URL when clicked', () => {
        render(
            <MemoryRouter>
              <table>
                <tbody>
                  <InventoryTableRow {...props} />
                </tbody>
              </table>
            </MemoryRouter>
          );

          fireEvent.click(screen.getByText(props.name));
          

          expect(mockedUseNavigate).toHaveBeenCalledWith(`/articles/list/id=${props.id}`);

    });

  

});