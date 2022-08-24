import { globalSlice } from './globalSlice';

const getData = (page = 1, search, id) => {
    const { setData, setLoading, setUser } = globalSlice.actions;

    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            let url = id
                ? `https://swapi.dev/api/people/${id}`
                : `https://swapi.dev/api/people/?page=${page}`;
            if (search) url += `&search=${search}`;

            const response = await fetch(url);
            const data = await response.json();

            if (id) {
                return dispatch(setUser(data));
            }

            dispatch(setData(data));
        } catch (error) {
            dispatch(setData([]));
        } finally {
            dispatch(setLoading(false));
        }
    };
};

export const globalOp = {
    getData,
};
