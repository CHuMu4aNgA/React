import cls from "./InputRef.module.scss"
import { forwardRef } from "react"

export const InputRef = forwardRef((props, ref) => {
    return (
        <input ref={ref} className={cls.input} {...props}/>
    )
})