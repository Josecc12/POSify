
import { render, fireEvent, screen } from '@testing-library/react';
import { SideberSubItem } from '../../../src/POSify/components/SidebarSubItem';
import {toBeInTheDocument} from '@testing-library/jest-dom';
import { MemoryRouter , useNavigate } from 'react-router-dom';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,

}));


describe('SidebarSubItem', () => {
    const items = [
        { text: 'Item 1', to: '/item1' },
        { text: 'Item 2', to: '/item2' },
        { text: 'Item 3', to: '/item3' },
    ];
   
    it('renders the component with the correct items', () => {
        const { getByText } = render(
            <MemoryRouter>
                <SideberSubItem items={items} visible={true} />
            </MemoryRouter>
        );
        items.forEach((item) => {
            expect(getByText(item.text)).toBeInTheDocument();
        });
    });

  

    it('calls navigate with the correct to value when an item is clicked', () => {
        const { getByText } = render(
            <MemoryRouter>
                <SideberSubItem items={items} visible={true} />
            </MemoryRouter>
        );
       
        fireEvent.click(getByText(items[1].text));
        expect(mockedUseNavigate).toHaveBeenCalledWith(items[1].to);
    });
});