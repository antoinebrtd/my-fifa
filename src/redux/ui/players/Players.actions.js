export const playersActionTypes = {
    TABS: {
        PLAYER_ZERO: 'DISPLAY_ZERO',
        PLAYER_ONE: 'DISPLPAY_ONE',
        PLAYER_TWO: 'DISPLAY_TWO'
    }
};

export const displayZero = () => ({
    type: playersActionTypes.TABS.PLAYER_ZERO
});

export const displayOne = () => ({
    type: playersActionTypes.TABS.PLAYER_ONE
});

export const displayTwo = () => ({
    type: playersActionTypes.TABS.PLAYER_TWO
});

export default {
    displayZero,
    displayOne,
    displayTwo
};
