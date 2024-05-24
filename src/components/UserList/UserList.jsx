import { UserItem } from '../UserItem/UserItem'


export const UserList = ({users, updateUser}) => {
 

  return (
    <>
      <ul>
        { 
          users.map(user =>
            <UserItem updateUser={updateUser} key={user.id} user={user} />
          )
        }
      </ul>
    </>
  )
}
