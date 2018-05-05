const defaultState = {
    isOpen: false,
};

const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                isOpen: true,
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                isOpen: false,
            };
        return (state)
    }
};

export default modalReducer;
