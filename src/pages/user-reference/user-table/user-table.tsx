import { memo } from "react";
import { TUser } from "../user-reference-page-type";
import { UserItem } from "./user--table-item";

type TProps = {
    users: TUser[],
    handleDelete: (id: string) => void,
    handleEdit: (user: TUser) => void
}

/** Таблица пользователей */
export const UserTable: React.FC<TProps> = memo(({
    users,
    handleDelete,
    handleEdit,
}) => (
    <table>
        <thead>
            <tr>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Отчество</th>
                <th>Email</th>
                <th>Телефон</th>
                <th>Должность</th>
                <th>Редактировать</th>
                <th>Удалить</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user: TUser) => (
                <UserItem key={user.id} user={user} handleDelete={handleDelete} handleEdit={handleEdit}/>
            ))}
        </tbody>
    </table>
));