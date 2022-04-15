import React  from 'react';
import './ContactItem.css';
import MyBtn from "../UI/MyBtn/MyBtn";


const ContactItem = (props) =>  {

    return (
        <div className="ContactItem">
            <div>
                <strong>{props.contact.name}</strong>
                <div className='btn-wrap'>
                    <MyBtn onClick={() => props.openModal()}>Редактировать</MyBtn>
                    <MyBtn onClick={() => props.delContact(props.contact)}>Удалить</MyBtn>
                </div>
            </div>
        </div>
    );
}

export default ContactItem;