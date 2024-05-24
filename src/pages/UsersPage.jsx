import { UserList } from '../components/UserList/UserList'
import { useState, useEffect, useRef } from 'react'
import { Button } from '../components/ui/Button/Button'
import { Input } from '../components/ui/Input/Input'
import { InputRef } from '../components/InputRef/InputRef'




export const UsersPage = () => {
    const [visibleUserList, setVisibleUserList] = useState(true)
    const [users, setUsers] = useState([])
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)
    console.log(inputRef)
    useEffect(() => {
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => setUsers(data.users))
        console.log('Первоначальное отображение компонента')
        
        // return () => {
        //   alert('Сейчас список будет удален')
        //   console.log('Удаление компонента')
        // }
    
    }, []) 
    const toggleUserList = () => {
    setVisibleUserList(visibleUserList => !visibleUserList)
    }

    const changeValue = (event) => {
      setInputValue(event.target.value)
    }
    
    const addUser = () => {
      const newUser = {
        id: Math.round(Math.random() * 1000),
        firstName: inputValue,
        lastName: inputRef.current.value
      }
        if (!inputValue) {
          return
      }
      setUsers([...users, newUser])
      setInputValue('')
      inputRef.current.value = ''
    }
    
      const removeUser = (id) => {
        if (!inputValue) {
          return
        }
        setUsers(users.filter(user => user.id !== id))
        setInputValue('')
    }
    
    const updateUser = (id) => {
    const newText = prompt('Новое имя')
        if (!newText) {
          return
        }
        setUsers(users.map((user) => {
          if (user.id === id) {
            return {
              ...user,
              firstName: newText
            }
          }
          return user
        })
        )
    }
    
    return (
        <>
            <Input
                placeholder='Введите имя'
                type="text"
                value={inputValue}
                onChange={changeValue}
            />
            <InputRef
                ref={inputRef}
                placeholder='Введите фамилию'
                type="text"
            />
            <Button
                btnClass='plus'
                onClick={addUser}
            >
            Добавить пользователя
            </Button>
            <Button
                btnClass='minus'
                onClick={() => removeUser(inputValue)}
            >
            Удалить пользователя
            </Button>
            {visibleUserList && <UserList users={users} updateUser={updateUser}/>}
            <Button
                btnClass='plus'
                onClick={toggleUserList}
                >
                Показать/скрыть UserList
            </Button>
        </>
    )
}