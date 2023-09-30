import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

const Contact = ({ contact, index }) => {
  const { store, actions } = useContext(Context);

  const [editing, setEditing] = useState(false);

  const [name, setName] = useState(store.contacts[index].name);
  const [email, setEmail] = useState(store.contacts[index].email);
  const [phone, setPhone] = useState(store.contacts[index].phone);
  const [address, setAddy] = useState(store.contacts[index].address);

  useEffect(() => {
    setName(contact.name);
    setEmail(contact.email);
    setPhone(contact.phone);
    setAddy(contact.address);
  }, [])

  useEffect(() => {
    if (!editing) {
      actions.editContact({
        name: name,
        email: email,
        phone: phone,
        address: address
      }, index);
    }
  }, [editing])

  return <div className="contact mt-2">
    <img className="contact-image" src={contact.imageUrl} />
    <ul>
      <li>{editing ? <input value={name} onChange={ev => setName(ev.target.value)} /> : <span>{store.contacts[index].name}</span>}</li>
      <li>{editing ? <input value={email} onChange={ev => setEmail(ev.target.value)} /> : <span>{store.contacts[index].email}</span>}</li>
      <li>{editing ? <input value={phone} onChange={ev => setPhone(ev.target.value)} /> : <span>{store.contacts[index].phone}</span>}</li>
      <li>{editing ? <input value={address} onChange={ev => setAddy(ev.target.value)} /> : <span>{store.contacts[index].address}</span>}</li>
    </ul>
    <div className="button-container">
      <button
        className="btn btn-primary"
        onClick={() => setEditing(!editing)}
      >
        {editing ? "Save" : "Edit"}
      </button>
      <button className="btn btn-danger">Delete</button>
    </div>
  </div>
}

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [render, rerender] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <button className="btn btn-primary">
            Add New Contact
          </button>
          <button className="btn btn-primary" onClick={() => console.log(store)}>
            rerender
          </button>
        </div>
      </div>
      <div className="col-md-8 offset-md-2">
        {store.contacts.map((contact, idx) => (
          <Contact contact={contact} index={idx} key={idx} />
        ))}
      </div>
      <hr />
      <div className="col-md-8 offset-md-2">
        {store.contacts.map((contact, idx) => (
          <Contact contact={contact} index={idx} key={idx} />
        ))}
      </div>
    </div>
  )
};
