import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { ListStyled } from './List.styled';

export const List = () => {
    const data = useSelector((state) => state.global?.data.results);

    return (
        <ListStyled>
            {data?.map((item, index) => {
                const id = item.url.split('/')[item.url.split('/').length - 2];

                return (
                    <li key={index}>
                        <NavLink to={`/character/${id}`}>{item?.name}</NavLink>
                    </li>
                );
            })}
        </ListStyled>
    );
};
