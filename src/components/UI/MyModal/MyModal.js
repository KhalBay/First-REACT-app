import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({children, closeModal}) => {

    const rootClasses = [cl.MyModal];

    return (
        <div className={rootClasses} onClick={closeModal}>
            <div onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;