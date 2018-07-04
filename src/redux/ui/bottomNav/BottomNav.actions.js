export const bottomNavActionTypes = {
  DISPLAY: {
    TICKET: "DISPLAY_TICKET",
    LANGUAGE: "DISPLAY_LANGUAGE",
    CONTACT: "DISPLAY_CONTACT"
  }
};

export const displayTicket = () => ({
  type: bottomNavActionTypes.DISPLAY.TICKET
});

export const displayLanguage = () => ({
  type: bottomNavActionTypes.DISPLAY.LANGUAGE
});

export const displayContact = () => ({
  type: bottomNavActionTypes.DISPLAY.CONTACT
});

export default {
  displayTicket,
  displayLanguage,
  displayContact
};
