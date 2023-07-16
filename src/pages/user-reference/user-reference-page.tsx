import React, { memo, useCallback, useState } from 'react';
import { TUser } from './user-reference-page-type';
import { UserForm } from './user-form/user-form';
import { UserTable } from './user-table/user-table';
import nextId from "react-id-generator";

/**
 * Старотовые знаения формы
 */
const initValueForm = {
  lastName: '',
  firstName: '',
  middleName: '',
  email: '',
  phone: '',
  position: '',
  id: '',
};

/** Старница справочника пользователей */
export const UserReference: React.FC = memo(() => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [user, setUser] = useState<TUser>(initValueForm);

  /**
   * Обработчик изменения полей формы
   */
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }, [user]);

  /**
   * Сохранение/редактирование формы
   */
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (user.id) {
        /**
         * Сохранение
         */
        const updatedUsers = users.map((userEdit) =>
          userEdit.id === user.id ? user : userEdit
        );
        setUsers(updatedUsers);
      } else {
        /**
         * Редактирование
         */
        const newUser = { ...user, id: nextId() };
        setUsers([...users, newUser]);
      }
      setUser(initValueForm);
    },
    [user, users, setUser]
  );

  /**
   * Удаление записи из таблицы
   */
  const handleDelete = useCallback((id: string) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  }, [users]);

  /**
   * Редактировние записи, переносит данные записи в форму
   */
  const handleEdit = useCallback((user: TUser) => {
    setUser(user);
  }, []);

  return (
    <div>
      <UserForm
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <UserTable
        users={users}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
});