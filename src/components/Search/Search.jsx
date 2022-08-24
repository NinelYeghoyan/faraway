import React from 'react';
import { useDispatch } from 'react-redux';

import { globalOp } from '../../store/global/operations';

import { IconSearch } from '../../assets/icons/Search';

import { SearchStyled } from './Search.styled';

export const Search = ({ onSearch }) => {
    const dispatch = useDispatch();

    let handler;
    const handleChange = (event) => {
        const value = event.target.value;

        if (handler !== undefined) {
            clearTimeout(handler);
        }

        handler = setTimeout(() => {
            dispatch(globalOp.getData(1, value));
            onSearch(value);
        }, 300);
    };

    return (
        <SearchStyled>
            <input type="text" placeholder="Search..." onChange={handleChange} />
            <IconSearch />
        </SearchStyled>
    );
};
