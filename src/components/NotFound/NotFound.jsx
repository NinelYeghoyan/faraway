import React from 'react';
import PropTypes from 'prop-types';

import { IconQuestion } from '../../assets/icons/Question';

import { NotFoundStyled } from './NotFound.styled';

export const NotFound = ({ isDataNotFound }) => {
    return (
        <NotFoundStyled className={`${isDataNotFound ? 'flex-center' : ''} notfound`}>
            {isDataNotFound ? (
                <div className="data-notfound flex-center">
                    <div className="circle flex-center">
                        <IconQuestion />
                    </div>

                    <div className="message">
                        <span>Ooops...</span>

                        <p>Data not found</p>
                    </div>
                </div>
            ) : (
                <div className="search-notfound">
                    <h6 className="title">Hmmm...</h6>

                    <p className="text">We couldn't find any matches</p>
                </div>
            )}
        </NotFoundStyled>
    );
};

NotFound.propTypes = {
    isDataNotFound: PropTypes.bool,
};
