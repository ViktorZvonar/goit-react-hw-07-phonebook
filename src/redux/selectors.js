// export const getContacts = store => store.contacts;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();
    return (
      normalizedName.includes(normalizedFilter) ||
      normalizedNumber.includes(normalizedFilter)
    );
  });

  return result;
};

export const getFilter = ({ filter }) => filter;
