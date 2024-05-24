import { Link } from 'react-router-dom'


export const NotFoundPage = () => {
    return (
        <>
            <div>
                Страница не найдена
            </div>
            <Link to='/'>Перейти на главную страницу</Link>
        </>
    )
}