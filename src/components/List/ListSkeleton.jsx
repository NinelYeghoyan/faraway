import React from 'react';

import { Skeleton } from '../Skeleton';

import { ListSkeletonStyled } from './ListSkeleton.styled';

export const ListSkeleton = () => {
    let itemCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <ListSkeletonStyled>
            {itemCount.map((index) => {
                return (
                    <div key={index} className="skeleton-wrapper">
                        <Skeleton />
                    </div>
                );
            })}
        </ListSkeletonStyled>
    );
};
