import React from 'react';
import MyInput from "../UI/MyInp/MyInput";
import './ContactFilter.css'

const ContactFilter = ({filter, setFilter}) => {
    return (
        <div className='Filter'>
            <h1>Поиск контактов</h1>
            <div>
                <MyInput
                    placeholder='Поиск...'
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                />
            </div>
        </div>
    );
};

export default ContactFilter;