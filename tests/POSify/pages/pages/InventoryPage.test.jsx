// FILEPATH: /c:/path/to/InventoryPage.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { InventoryPage } from '../../../../src/POSify/pages/InventoryPage';
import { MemoryRouter } from 'react-router-dom';
import { posSlice } from '../../../../src/store/pos/posSlice';
import { menuSlice } from '../../../../src/store/menu/menuSlice';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';


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

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,

}));

describe('InventoryPage', () => {


  it('renders the "Add Product" button', () => {

    const mockStore = getMockStore({
      isMenuOpen: false,
      inventoryFilters: {
        store: 'All',
        category: 'All',
      }
    });
    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <InventoryPage />
        </MemoryRouter>
      </Provider>
    );
    const addButton = screen.getByText('Add Product');
    expect(addButton).toBeInTheDocument();
    fireEvent.click(addButton);
    expect(mockedUseNavigate).toHaveBeenCalledWith('/articles/list/id=?');

  });


  it('renders the search input', () => {
    const mockStore = getMockStore({
      isMenuOpen: false,
      inventoryFilters: {
        store: 'All',
        category: 'All',
      }
    });
    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <InventoryPage />
        </MemoryRouter>
      </Provider>
    );
    const searchInput = screen.getByRole('textbox');
    expect(searchInput).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: 'Producto 1' } });
    expect(searchInput.value).toBe('Producto 1');
  });

  it('renders the table', () => {
    const mockStore = getMockStore({
      isMenuOpen: false,
      inventoryFilters: {
        store: 'All',
        category: 'All',
      }
    });
    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <InventoryPage />
        </MemoryRouter>
      </Provider>
    );
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });
});