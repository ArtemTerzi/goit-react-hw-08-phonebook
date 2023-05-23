export const selectContacts = state => state.contacts.contacts.items;

export const selectFilter = state => state.contacts.filter;

export const selectLoadingStatus = state => state.contacts.contacts.isLoading;

export const selectErrorStatus = state => state.contacts.contacts.error;
