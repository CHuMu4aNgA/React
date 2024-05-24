import cls from "./Input.module.scss"

export const Input = (props) => {
    return (
        <input className={cls.input} {...props}/>
    )
}