import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './layout/Home';
import { Inner } from './layout/Inner';

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character/:id" element={<Inner />} />
        </Routes>
    );
};
