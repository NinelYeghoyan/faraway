import React from 'react';
import PropTypes from 'prop-types';

import { IconUser } from '../../assets/icons/User';

import { CardStyled } from './Card.styled';

export const Card = ({ data }) => {
    return (
        <CardStyled>
            <div className="person-info card-grid">
                <div className="person-avatar flex-center">
                    <IconUser />
                </div>

                <h3 className="person-name">{data?.name}</h3>

                <div className="person-info-list flex-center">
                    <div>
                        <p className="description">Gender:</p>
                        <p className="title">{data?.gender}</p>
                    </div>

                    <div>
                        <p className="description">Birth:</p>
                        <p className="title">{data?.birth_year}</p>
                    </div>
                </div>
            </div>

            <ul className="person-list card-grid">
                <li className="flex-center">
                    <h6 className="title">{data?.skin_color}</h6>
                    <p className="description">Skin Color</p>
                </li>
                <li className="flex-center">
                    <h6 className="title">{data?.hair_color}</h6>
                    <p className="description">Hair Color</p>
                </li>
                <li className="flex-center">
                    <h6 className="title">{data?.eye_color}</h6>
                    <p className="description">Eye Color</p>
                </li>
                <li className="flex-center">
                    <h6 className="title">{data?.height}</h6>
                    <p className="description">Height</p>
                </li>
                <li className="flex-center">
                    <h6 className="title">{data?.mass}</h6>
                    <p className="description">Mass</p>
                </li>
            </ul>
        </CardStyled>
    );
};

Card.propTypes = {
    data: PropTypes.object,
};
