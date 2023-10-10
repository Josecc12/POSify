import { fireEvent, render, renderHook, screen } from '@testing-library/react';

import { DropDown } from '../../../src/POSify/components/DropDown';
import { posSlice } from '../../../src/store/pos/posSlice';
import { menuSlice } from '../../../src/store/menu/menuSlice';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { usePosStore } from '../../../src/hooks/usePos';






const getMockStore = (initalState) => {
    return configureStore({
        reducer: {
            pos: posSlice.reducer,
        },
        preloadedState: {
            menu: {
                isMenuOpen: true,
            },

            pos: { ...initalState },
        }
    })
}


describe('DropDown', () => {


    const props = {
        buttonLabel: 'Category',
        anchorLabels: ['All', 'Test Category 1', 'Test Category 2'],
        filterName: 'category',
    };

    it('renders the component with the correct props', () => {

        const mockStore = getMockStore({
            isMenuOpen: false,
            inventoryFilters: {
                store: 'All',
                category: 'All',
            }
        });

        const { getByText } = render(
            <Provider store={mockStore}>
                <DropDown {...props} />
            </Provider>
        );

        expect(screen.getByText(`${props.buttonLabel}:`)).toBeInTheDocument();
        expect(screen.getByText(`Todas las ${props.buttonLabel}s`)).toBeInTheDocument();
        expect(screen.getByText(props.anchorLabels[0])).toBeInTheDocument();
        expect(screen.getByText(props.anchorLabels[1])).toBeInTheDocument();
        expect(screen.getByText(props.anchorLabels[2])).toBeInTheDocument();
    });

    it('updates the inventory filter when a label is clicked', () => {



        const mockStore = getMockStore({
            isMenuOpen: false,
            inventoryFilters: {
                store: 'All',
                category: 'All',
            }
        });

       

        const { getByText } = render(
            <Provider store={mockStore}>
                <DropDown {...props} />
            </Provider>
        );


        const mockSetInventoryFilter = jest.fn();
        jest.mock("../../../src/hooks/usePos", () => ({
            usePosStore: () => ({
                
                setInventoryFilter: mockSetInventoryFilter,
            }),
        }));

        const { result } = renderHook(() => usePosStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>,
        });

       

     
        fireEvent.click(getByText(props.anchorLabels[1]));
        //TODO : Fix this test

    });

});