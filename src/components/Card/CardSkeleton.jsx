import React from 'react';

import { Skeleton } from '../Skeleton';

import { CardSkeletonStyled } from './CardSkeleton.styled';

export const CardSkeleton = () => {
    let itemCount = [1, 2, 3, 4, 5];

    return (
        <CardSkeletonStyled>
            <div className="skeleton-info card-grid">
                <div className="skeleton-avatar">
                    <Skeleton />
                </div>

                <div className="skeleton-name">
                    <Skeleton />
                </div>

                <div className="skeleton-info-list flex-center">
                    <div>
                        <Skeleton />
                    </div>

                    <div>
                        <Skeleton />
                    </div>
                </div>
            </div>

            <ul className="skeleton-list card-grid">
                {itemCount.map((index) => {
                    return (
                        <li key={index}>
                            <Skeleton />
                        </li>
                    );
                })}
            </ul>
        </CardSkeletonStyled>
    );
};
