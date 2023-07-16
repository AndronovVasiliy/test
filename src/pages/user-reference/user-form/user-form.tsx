import React from 'react';
import { USER_FORM_CONFIG } from './user-form-constants';
import { TUser } from '../user-reference-page-type';

type TProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    user: TUser
}

/** Форма пользователя */
export const UserForm: React.FC<TProps> = React.memo(({
    handleChange,
    handleSubmit,
    user,
}) => (
    <form onSubmit={handleSubmit}>
        <div>
            <input
                {...USER_FORM_CONFIG.FIRST_NAME}
                value={user.firstName}
                onChange={handleChange}
            />
        </div>
        <div>
            <input
                {...USER_FORM_CONFIG.MIDDLE_NAME}
                value={user.middleName}
                onChange={handleChange}
            />
        </div>
        <div>
            <input
                {...USER_FORM_CONFIG.LAST_NAME}
                value={user.lastName}
                onChange={handleChange}
            />
        </div>
        <div>
            <input
                {...USER_FORM_CONFIG.PHONE}
                value={user.phone}
                onChange={handleChange}
            />
        </div>
        <div>
            <input
                {...USER_FORM_CONFIG.EMAIL}
                value={user.email}
                onChange={handleChange}
            />
        </div>
        <div>
            <select
                name="position"
                value={user.position}
                onChange={handleChange}
            >
                {USER_FORM_CONFIG.POSITION.positionList.map((i) => (
                    <option key={i} value={i}>
                        {i}
                    </option>
                ))}
            </select>
        </div>
        <div>
            <button type="submit">Сохранить</button>
        </div>
    </form>
));