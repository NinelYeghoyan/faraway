export function initialGlobalState() {
    return {
        data: {
            results: null,
            count: null,
        },
        user: null,
        search: [],
        isLoading: true,
    };
}
