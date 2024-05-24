import { Link } from 'react-router-dom'
 


export const UserItem = ({ user, updateUser }) => {
  return (
    <li onContextMenu={() => updateUser(user.id)}>
        {user.id}. {user.firstName} {user.lastName} 

        <br />
        <Link to={`/users/${user.id}`}> 
          Перейти на страницу пользователя {user.firstName} {user.lastName}
        </Link>
    </li>
  )
}
     