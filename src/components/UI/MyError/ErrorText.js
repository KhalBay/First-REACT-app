import React from 'react';

const ErrorText = () => {
    return (
        <div>
            Ошибка: введён неверный логин или пароль.
            <br/>
            Если у вас не получается войти, можно использовать тестовые данные:
            <br/><br/>
            admin
            <br/>
            123
        </div>
    );
};

export default ErrorText;