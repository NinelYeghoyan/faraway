import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { globalOp } from '../../store/global/operations';

import { Header } from '../Header';
import { Loader } from '../../components/Loader';
import { Search } from '../../components/Search';
import { List } from '../../components/List';
import { ListSkeleton } from '../../components/List/ListSkeleton';
import { Pagination } from '../../components/Pagination';
import { NotFound } from '../../components/NotFound';

import { LayoutStyled } from '../Layout.styled';

export const Home = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');

    const isLoading = useSelector((state) => state.global?.isLoading);
    const data = useSelector((state) => state.global?.data);
    const { results, count } = data;

    useEffect(() => {
        dispatch(globalOp.getData());
    }, [dispatch]);

    const Content = useMemo(() => {
        switch (true) {
            case results && results.length === 0 && searchValue.length > 0:
                return <NotFound />;
            case results && results.length === 0 && !isLoading:
                return <NotFound isDataNotFound />;
            default:
                return isLoading ? <ListSkeleton /> : <List />;
        }
    }, [isLoading, results, searchValue.length]);

    if (!results) {
        return <Loader />;
    }

    return (
        <LayoutStyled className="home-page flex-center">
            <div className="layout-container">
                <Header />
                <Search
                    onSearch={(value) => {
                        setSearchValue(value);
                    }}
                />
                {Content}
                {results.length > 0 ? (
                    <Pagination
                        currentPage={currentPage}
                        totalCount={count}
                        pageSize={10}
                        onPageChange={(page) => {
                            setCurrentPage(page);
                            dispatch(globalOp.getData(page, searchValue));
                        }}
                    />
                ) : null}
            </div>
        </LayoutStyled>
    );
};
