import React from 'react';

import { LoaderStyled } from './Loader.styled';

export const Loader = () => {
    return (
        <LoaderStyled className="flex-center">
            <div className="loader" />
        </LoaderStyled>
    );
};
