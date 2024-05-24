import { Link } from 'react-router-dom'


export const MainPage = () => {
    return (
        <div>
            Главная страница
        <br></br>
            <Link to='/users'>Перейти на страницу с пользователями</Link>
        </div>
    )
}