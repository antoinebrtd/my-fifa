export const headerActionTypes = {
    DRAWER: {
        OPEN: 'OPEN_DRAWER',
        CLOSE: 'CLOSE_DRAWER'
    }
};

export const openDrawer = () => ({
    type: headerActionTypes.DRAWER.OPEN
});

export const closeDrawer = () => ({
    type: headerActionTypes.DRAWER.CLOSE
});

export default {
    openDrawer,
    closeDrawer,
};
