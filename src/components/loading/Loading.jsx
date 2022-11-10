import React from 'react'
import style from './style.module.scss'

const Loading = ({ title }) => {
    return (
        <>
        <div className={style.background}>
        <div className={style.loading}>Loading {title} ...</div>
            <div className={style.cup}>
                <div className={style.handle}></div>
            </div>
        </div>
        
        </>
    )
}

export default Loading