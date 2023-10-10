import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CategoryTableRow } from '../../../../src/POSify/components/Category/CategoryTableRow';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { toBeInTheDocument } from '@testing-library/jest-dom';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,

}));



describe('CategoryTableRow', () => {
  const id = 1;
  const category = 'Food';
  const color = 'bg-red-500';



  it('renders a checkbox', () => {
    render(

      <table>
        <tbody>
          <CategoryTableRow id={id} category={category} color={color} />
        </tbody>
      </table>


    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('renders the category name', () => {
    render(
      <table>
        <tbody>
          <CategoryTableRow id={id} category={category} color={color} />
        </tbody>
      </table>
    );
    const categoryName = screen.getByText(category);
    expect(categoryName).toBeInTheDocument();
  });

  it('navigate to the category page when the category is clicked', () => {
    render(
      <MemoryRouter> 
        <table>
          <tbody>
            <CategoryTableRow id={id} category={category} color={color} />
          </tbody>
        </table>
      </MemoryRouter>
    )

    const td = screen.getAllByRole('cell')[1];
    fireEvent.click(td);
    expect(mockedUseNavigate).toHaveBeenCalledWith(`/articles/categories/id=${id}`);
    
  });



});