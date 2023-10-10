import React, { useState, useEffect } from 'react';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';

export const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {
    // Calcula totalPages en función de totalItems
    const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / itemsPerPage));

    useEffect(() => {
        // Actualiza totalPages cuando cambie totalItems
        setTotalPages(Math.ceil(totalItems / itemsPerPage));
    }, [totalItems, itemsPerPage]);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, startPage + 4);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <li
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={`block h-8 w-8 rounded border ${i === currentPage ? 'bg-blue-600 text-white' : 'bg-white text-gray-900'
                        } text-center leading-8 border-gray-100`}
                >
                    {i}
                </li>
            );
        }

        return pageNumbers;
    };

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    return (
        <>
            <ol className="flex justify-center gap-1 text-xs font-medium">
                <li>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center w-8 h-8 text-gray-900 bg-white border border-gray-100 rounded rtl:rotate-180"
                        onClick={handlePrevPage}
                    >
                        <span className="sr-only">Prev Page</span>
                        <MdOutlineNavigateBefore />
                    </a>
                </li>

                {renderPageNumbers()}

                <li>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center w-8 h-8 text-gray-900 bg-white border border-gray-100 rounded rtl:rotate-180"
                        onClick={handleNextPage}
                    >
                        <span className="sr-only">Next Page</span>
                        <MdOutlineNavigateNext />
                    </a>
                </li>
            </ol>
        </>
    );
};
