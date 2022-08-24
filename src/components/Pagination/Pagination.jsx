import React from 'react';
import classnames from 'classnames';

import { usePagination, DOTS } from '../../hooks/usePagination';

import { IconArrow } from '../../assets/icons/Arrow';

import { PaginationStyled } from './Pagination.styled';

export const Pagination = (props) => {
    const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <PaginationStyled className="pagination-bar">
            <ul className={classnames('pagination-container', { [className]: className })}>
                <li
                    className={classnames('pagination-item flex-center', {
                        disabled: currentPage === 1,
                    })}
                    onClick={onPrevious}
                >
                    <div className="arrowLeft">
                        <IconArrow />
                    </div>
                </li>

                {paginationRange.map((pageNumber, index) => {
                    if (pageNumber === DOTS) {
                        return (
                            <li key={index} className="pagination-item dots flex-center">
                                &#8230;
                            </li>
                        );
                    }

                    return (
                        <li
                            key={index}
                            className={classnames('pagination-item flex-center', {
                                selected: pageNumber === currentPage,
                            })}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </li>
                    );
                })}

                <li
                    className={classnames('pagination-item flex-center', {
                        disabled: currentPage === lastPage,
                    })}
                    onClick={onNext}
                >
                    <div className="arrowRight">
                        <IconArrow />
                    </div>
                </li>
            </ul>
        </PaginationStyled>
    );
};
