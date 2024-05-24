import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const UserProfilePage = () => {
    const { userId } = useParams()
    const [user, setUser] = useState({})
    const {firstName, lastName, age, gender, bloodGroup, image,  city, address } = user

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])

    return (
        <>
            <h2>Страница пользователя {firstName} {lastName} (id: {userId})</h2>
            <div>Адрес: {user?.address?.address}</div>
            <div>Город: {user?.address?.city}</div>
            <div>Возраст: {age} лет</div>
            <div>Пол: {gender === 'male' ? "мужской" : "женский"}</div>
            <img src={image} alt={`${firstName} ${lastName}`} />
        </>
    )
}