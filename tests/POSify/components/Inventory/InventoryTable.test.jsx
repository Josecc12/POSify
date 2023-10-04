import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InventoryTable } from '../../../../src/POSify/components/Inventory/InventoryTable';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { posSlice } from '../../../../src/store/pos/posSlice';

describe('InventoryTable', () => {

    const middlewares = []
    const mockStore = configureStore(middlewares)


    const data = [
        {
            id: 1,
            name: 'Product 1',
            category: 'Category 1',
            price: 10,
            cost: 5,
            utility: 50,
            stock: 100,
            store: 'Store 1',
        },
        {
            id: 2,
            name: 'Product 2',
            category: 'Category 2',
            price: 20,
            cost: 10,
            utility: 50,
            stock: 200,
            store: 'Store 2',
        },
        {
            id: 3,
            name: 'Product 3',
            category: 'Category 1',
            price: 30,
            cost: 15,
            utility: 50,
            stock: 300,
            store: 'Store 1',
        },
    ];

    const searchTerm = '';

    it('renders the correct number of rows', () => {
        const initialState = {
            pos: {
                isMenuOpen: false,
                inventoryFilters: {
                    store: 'All',
                    category: 'All',
                }
            }
        }
        const store = mockStore(initialState)

        render(
            <Provider store={store}>
                <InventoryTable data={data} searchTerm={searchTerm} />
            </Provider>
        );
    });
    
});