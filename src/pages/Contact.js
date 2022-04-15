import React, {useMemo, useState, useCallback} from 'react';
import ContactList from "../components/ContactList/ContactList";
import AddContact from "../components/AddContact/AddContact";
import ContactFilter from "../components/ContactFilter/ContactFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import ContactUpdate from "../components/ContactUpdate/ContactUpdate";

function Contact() {

    const [contacts, setContacts] = useState([
        {id: 1, name: 'Ivan Ivanov'},
        {id: 2, name: 'Egor Egorov'},
        {id: 3, name: 'Artem Artemov'}
    ])

    const [currentContact, setCurrentContact] = useState(null)
    const [filter, setFilter] = useState({query: ''})
    const [modal, setModal] = useState(false)


    const searchingContacts = useMemo(() => {
        return contacts.filter(contacts => contacts.name.toLowerCase().includes(filter.query))
    }, [filter.query, contacts])

    const createContact = (newContact) => {
        setContacts([...contacts, newContact])
    }

    const delContact = (contact) => {
        setContacts(contacts.filter(p => p.id !== contact.id))
    }

    const updateContact = (updatedContact) => {
        const updContasts = contacts.map(contact => {
            if (updatedContact.id === contact.id) {
                return updatedContact
            } else {
                return contact
            }
        })
        setContacts(updContasts)
        closeModal()
    }

    const openModal = (contact) => {
        setCurrentContact(contact)
        setModal(true)
    }

    const closeModal = useCallback(() => {setModal(false)})

    return (
        <div className='App'>
            <AddContact create={createContact}/>
            <ContactFilter filter={filter} setFilter={setFilter}/>
            <ContactList contacts={searchingContacts} delContact={delContact} openModal={openModal}/>
            {modal && (
                <MyModal closeModal={closeModal}>
                    <ContactUpdate updateContact={updateContact} contact={currentContact}/>
                </MyModal>
            )}
        </div>
    )
}

export default Contact;