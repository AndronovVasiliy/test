import { memo } from 'react';
import { TUser } from '../user-reference-page-type';

type TProps = {
  user: TUser,
  handleDelete: (id: string) => void,
  handleEdit: (user: TUser) => void
};

/** Данные пользователя */
export const UserItem: React.FC<TProps> = memo(({
  user,
  handleDelete,
  handleEdit,
}) => (
  <tr>
    <td>{user.lastName}</td>
    <td>{user.firstName}</td>
    <td>{user.middleName}</td>
    <td>{user.email}</td>
    <td>{user.phone}</td>
    <td>{user.position}</td>    
    <td>
      <button onClick={() => handleEdit(user)}>Редактировать</button>
    </td>
    <td>
      <button onClick={() => handleDelete(user.id)}>Удалить</button>
    </td>
  </tr>
));