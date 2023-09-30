const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		randomKey: "Something random.",
		contacts: [
		  {
			name: "Test Contact",
			email: "test@test.co",
			phone: "+1 234 567-8910",
			address: "123 Nonesuch pl. Irving, TX",
			imageUrl: "https://placekitten.com/550"
		  }
		],
	  },
	  actions: {
		addContact: () => { },
		editContact: (contact, index) => {
		  let tempContacts = getStore().contacts.toSpliced(index, 1, contact);
		  setStore({ contacts: tempContacts });
		},
		removeContact: () => { },
	  }
	};
  };
  
  export default getState;
  