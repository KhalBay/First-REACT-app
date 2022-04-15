import React from 'react';
import ContactItem from "../ContactItem/ContactItem";
import './ContactList.css';

const ContactList = ({contacts, delContact, openModal}) => {

    if (!contacts.length) {
        return (
            <div>
                <h1>Контакты не найдены</h1>
            </div>
        )
    }

    return (
        <div className='ContactList'>
            <h1>Список контактов</h1>
            {contacts.map(contact =>
                <ContactItem
                    delContact={delContact}
                    contact={contact}
                    openModal={()=>{openModal(contact)}}
                    key={contact.id}
                />
            )}
        </div>
    )
};

export default ContactList;