import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Pagination } from '../../../src/POSify/components/Pagination';
import { toBeInTheDocument } from '@testing-library/jest-dom';

describe('Pagination', () => {
    const props = {
        totalItems: 20,
        itemsPerPage: 5,
        currentPage: 1,
        setCurrentPage: jest.fn(),
    };

    it('renders the component with the correct props', () => {
        const { getByText } = render(<Pagination {...props} />);

        expect(getByText('1')).toBeInTheDocument();
        expect(getByText('2')).toBeInTheDocument();
        expect(getByText('3')).toBeInTheDocument();
        expect(getByText('4')).toBeInTheDocument();
    });

    it('calls setCurrentPage with the correct value when a page number is clicked', () => {
        const { getByText } = render(<Pagination {...props} />);

        fireEvent.click(getByText('3'));

        expect(props.setCurrentPage).toHaveBeenCalledWith(3);
    });

    it('calls setCurrentPage with the correct value when the previous page button is clicked', () => {
        const { getByText } = render(<Pagination {...props} currentPage={2} />);
        fireEvent.click(getByText('Prev Page'));
        expect(props.setCurrentPage).toHaveBeenCalledWith(1);
    });

    it('calls setCurrentPage with the correct value when the next page button is clicked', () => {
        const { getByText } = render(<Pagination {...props} />);

        fireEvent.click(getByText('Next Page'));

        expect(props.setCurrentPage).toHaveBeenCalledWith(2);
    });

});