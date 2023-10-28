import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { InventoryTable } from '../../../../src/POSify/components/Inventory/InventoryTable';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { posSlice } from '../../../../src/store/pos/posSlice';
import { configureStore } from '@reduxjs/toolkit';
import { menuSlice } from '../../../../src/store/menu/menuSlice';


const getMockStore = (initalState) => {
    return configureStore({
        reducer: {
            pos: posSlice.reducer,
            menu: menuSlice.reducer,
        },
        preloadedState: {
            menu: {
                isMenuOpen: true,
            },

            pos: { ...initalState },
        }
    })
}


describe('InventoryTable', () => {
    const data = [
        {
            id: 1,
            name: 'Test Item 1',
            category: 'Test Category 1',
            store: 'Test Store 1',
            price: 10.99,
            cost: 5.99,
            utility: 2.99,
            stock: 10,

        },
        {
            id: 2,
            name: 'Test Item 2',
            category: 'Test Category 2',
            store: 'Test Store 2',
            price: 20.99,
            cost: 15.99,
            utility: 5.99,
            stock: 20,
        },
    ];

    it('renders the component with the correct Headers', () => {
        const searchTerm = '';

        const mockStore = getMockStore({
            isMenuOpen: false,
            inventoryFilters: {
                store: 'All',
                category: 'All',
            }
        })
        render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <InventoryTable data={data} searchTerm={searchTerm} />
                </MemoryRouter>
            </Provider>
        );


        const columnHeaders = screen.getAllByRole('columnheader');
        expect(columnHeaders[1]).toHaveTextContent('Product');
        expect(columnHeaders[2]).toHaveTextContent('Category');
        expect(columnHeaders[3]).toHaveTextContent('Price');
        expect(columnHeaders[4]).toHaveTextContent('Cost');
        expect(columnHeaders[5]).toHaveTextContent('Utility %');
        expect(columnHeaders[6]).toHaveTextContent('Stock');

    });

    it('filters the data correctly with searchTerm', () => {
        const searchTerm = 'Test Item 1';
        const mockStore = getMockStore({
            isMenuOpen: false,
            inventoryFilters: {
                store: 'All',
                category: 'All',
            }
        })
        render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <InventoryTable data={data} searchTerm={searchTerm} />
                </MemoryRouter>
            </Provider>
        );



        expect(screen.getByText('Test Item 1')).toBeInTheDocument();
        expect(screen.queryByText('Test Item 2')).not.toBeInTheDocument();


    });

    it('filtes the data correctly with category', () => {

        const searchTerm = '';
        const inventoryFilters = {
            store: 'All',
            category: 'Test Category 1',
        }

        const mockStore = getMockStore({
            isMenuOpen: false,
            inventoryFilters: inventoryFilters
        })

        render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <InventoryTable data={data} searchTerm={searchTerm} />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText('Test Item 1')).toBeInTheDocument();
        expect(screen.queryByText('Test Item 2')).not.toBeInTheDocument();

    });

    it('filtes the data correctly with store', () => {

        const searchTerm = '';
        const inventoryFilters = {
            store: 'All',
            category: 'Test Category 1',
        }

        const mockStore = getMockStore({
            isMenuOpen: false,
            inventoryFilters: inventoryFilters
        })
        render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <InventoryTable data={data} searchTerm={searchTerm} />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText('Test Item 1')).toBeInTheDocument();
        expect(screen.queryByText('Test Item 2')).not.toBeInTheDocument();

    });


});
