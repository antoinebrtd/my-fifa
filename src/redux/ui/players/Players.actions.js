export const playersActionTypes = {
    TABS: {
        SWITCH: 'SWITCH_PLAYER'
    }
};

export const switchDisplay = (value) => ({
    type: playersActionTypes.TABS.SWITCH,
    index: value
});

export default {
    switchDisplay
};
