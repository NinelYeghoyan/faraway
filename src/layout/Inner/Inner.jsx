import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { globalOp } from '../../store/global/operations';

import { IconBack } from '../../assets/icons/Back';
import { Card } from '../../components/Card';
import { CardSkeleton } from '../../components/Card/CardSkeleton';

import { LayoutStyled } from '../Layout.styled';

export const Inner = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const data = useSelector((state) => state.global?.user);
    const isLoading = useSelector((state) => state.global?.isLoading);

    const handleClick = () => {
        navigate('/', { replace: true });
    };

    useEffect(() => {
        dispatch(globalOp.getData(null, null, id));
    }, [dispatch, id]);

    return (
        <LayoutStyled className="inner-page flex-center">
            <div className="layout-container position-relative">
                <div className="back-btn flex-center" onClick={handleClick}>
                    <IconBack />
                </div>

                {isLoading ? <CardSkeleton /> : <Card data={data} />}
            </div>
        </LayoutStyled>
    );
};
