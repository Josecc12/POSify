// FILEPATH: /c:/path/to/CategoryPage.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { MemoryRouter , useNavigate } from 'react-router-dom';
import { CategoryPage } from '../../../../src/POSify/pages/CategoryPage';
import { Provider } from 'react-redux';
import { posSlice } from '../../../../src/store/pos/posSlice';
import { menuSlice } from '../../../../src/store/menu/menuSlice';
import { configureStore } from '@reduxjs/toolkit';
import { toBeInTheDocument } from '@testing-library/jest-dom';

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

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockUseNavigate,
}));

describe('CategoryPage', () => {
  const mockStore = getMockStore({
    isMenuOpen: false,
    inventoryFilters: {
      store: 'All',
      category: 'All',
    }
  });


  it('renders without crashing', () => {



    render(
      <Provider store={mockStore}>

        <CategoryPage />

      </Provider>
    );
  });


  it('renders the "Cancel" button', () => {
    render(
      <Provider store={mockStore}>
        <CategoryPage />

      </Provider>
    );
    const cancelButton = screen.getByText('Cancel');
    expect(cancelButton).toBeInTheDocument();
    fireEvent.click(cancelButton);
    expect(mockUseNavigate).toHaveBeenCalledWith(-1);
  });
  
  it('renders the "Save" button', () => {
    render(
      <Provider store={mockStore}>
        <CategoryPage />

      </Provider>
    );
    const saveButton = screen.getByText('Save');
    expect(saveButton).toBeInTheDocument();
    fireEvent.click(saveButton);
    // Add your own assertion here based on the expected behavior of the button
  });

 

  it('renders the category input', () => {
    render(
      <Provider store={mockStore}>
        <CategoryPage />

      </Provider>
    );
    const categoryInput = screen.getByPlaceholderText('Category');
    expect(categoryInput).toBeInTheDocument();
    fireEvent.change(categoryInput, { target: { value: 'Test Category' } });
    expect(categoryInput.value).toBe('Test Category');
  });


});