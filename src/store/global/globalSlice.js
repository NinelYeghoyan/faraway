import { createSlice } from '@reduxjs/toolkit';
import { initialGlobalState } from './initialState';

export const globalSlice = createSlice({
    name: 'global',
    initialState: initialGlobalState(),
    reducers: {
        setData(state, action) {
            state.data = action.payload;
        },
        setSearch(state, action) {
            state.search = action.payload;
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setUser(state, action) {
            state.user = action.payload;
        },
    },
});

export default globalSlice.reducer;
