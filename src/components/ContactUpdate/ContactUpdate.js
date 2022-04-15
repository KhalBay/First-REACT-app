import React,{useState} from 'react';
import MyInput from "../UI/MyInp/MyInput";
import MyBtn from "../UI/MyBtn/MyBtn";
import './ContactUpdate.css'

const ContactUpdate = ({updateContact, contact}) => {

    const updateFinish = () => {
        updateContact(currentContact)
    }

    const [currentContact, setCurrentContact] = useState(contact || {})

    return (
        <div className='ContactUpdate'>
            <h1>Редактировать контакт</h1>
            <div>
                <MyInput
                    value={currentContact.name}
                    onChange={e => setCurrentContact({...currentContact, name: e.target.value})}
                />
                <MyBtn onClick={updateFinish}>Изменить</MyBtn>
            </div>
        </div>
    );
};

export default ContactUpdate;