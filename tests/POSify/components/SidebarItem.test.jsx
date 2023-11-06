import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { SidebarItem } from '../../../src/POSify/components/SidebarItem';
import { toBeInTheDocument } from '@testing-library/jest-dom';


const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe('SidebarItem', () => {
    const icon = <div data-testid="icon" />;
    const text = 'Test Item';
    const subMenu = [
        { text: 'Sub Item 1', to: '/subitem1' },
        { text: 'Sub Item 2', to: '/subitem2' },
    ];
    const to = '/testitem';

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the component with the correct props', () => {
        const { getByText, getByTestId } = render(
            <SidebarItem icon={icon} text={text} subMenu={subMenu} to={to} />
        );
        expect(getByTestId('icon')).toBeInTheDocument();
        expect(getByText(text)).toBeInTheDocument();

    });

    it('renders the expand icon when subMenu is provided', () => {
        const { getByTestId } = render(<SidebarItem icon={icon} text={text} subMenu={subMenu} to={to} />);
        expect(getByTestId('expand-icon')).toBeInTheDocument();
    });

    it('does not render the expand icon when subMenu is not provided', () => {
        const { queryByTestId } = render(<SidebarItem icon={icon} text={text} to={to} />);
        expect(queryByTestId('expand-icon')).toBeNull();
    });

    it('toggles the subMenu when the item is clicked', () => {
        const { getByTestId, getByText } = render(<SidebarItem icon={icon} text={text} subMenu={subMenu} to={to} />);
        fireEvent.click(getByText(text));
        expect(getByTestId('sub-menu')).not.toHaveClass('hidden');
        fireEvent.click(getByText(text));
        expect(getByTestId('sub-menu')).toHaveClass('hidden');

    });

    it('navigates to the correct route when the item is clicked and subMenu is not provided', () => {
        const { getByText } = render(<SidebarItem icon={icon} text={text} to={to} />);
        fireEvent.click(getByText(text));
        expect(mockUseNavigate).toHaveBeenCalledWith(to);
      });




});