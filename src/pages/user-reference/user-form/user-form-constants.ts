/** Конфиг полей */
export const USER_FORM_CONFIG = {
    FIRST_NAME: {
        type: 'text',
        name: 'firstName',
        placeholder: 'Имя',
    },
    MIDDLE_NAME: {
        type: 'text',
        name: 'middleName',
        placeholder: 'Отчество',
    },
    LAST_NAME: {
        type: 'text',
        name: 'lastName',
        placeholder: 'Фамилия',
    },
    POSITION: {
        type: 'text',
        name: 'lastName',
        placeholder: 'Должность',
        positionList:  ['Выберите должность', 'инженер', 'техник', 'механик', 'оператор', 'начальник смены']
    },
    PHONE: {
        type: 'tel',
        name: 'phone',
        placeholder: 'Телефон',
    },
    EMAIL: {
        type: 'email',
        name: 'email',
        placeholder: 'Почта',
    },
};
