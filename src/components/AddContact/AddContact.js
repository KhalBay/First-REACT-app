import React, {useState} from 'react';
import MyInput from "../UI/MyInp/MyInput";
import MyBtn from "../UI/MyBtn/MyBtn";
import './AddContact.css';

const AddContact = ({create}) => {

    const [contact, setContact] = useState( {name: ''});

    const AddNewContact = (e) => {
        e.preventDefault()
        const newContact = {
            ...contact, id: Date.now()
        }
        create(newContact)
        setContact({name: ''})
    }


    return (
        <div className='AddContact'>
            <h1>Добавить новый контакт</h1>
            <form>
                <MyInput
                    onChange={e => setContact({...contact, name: e.target.value})}
                    value={contact.name}
                    type="text"
                    placeholder='Введите имя'
                />
                <MyBtn onClick={AddNewContact}>Добавить</MyBtn>
            </form>
        </div>

    );
};

export default AddContact;