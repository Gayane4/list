import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Button from '../button/Button'
import style from './../button/style.module.scss'

const EditTools = ({ details, setDetails, setEdit, value, setValue, id }) => {
    function saveItem(id) {
        setDetails(details.map(item => {
            if (item.id === id) {
                item.title = value
            }
            return item
        }))
        setEdit('')
    }
    function noChangeItem(id) {
        details.map(item => {
            if (item.id === id) {
                setValue(item.title)
            }
            return value
        })
        setEdit('')
    }

    return (
        <div className={style.buttons}>
            <Button onClick={() => saveItem(id)}><FontAwesomeIcon icon={faCheck} /></Button>
            <Button onClick={() => noChangeItem(id)} >X</Button>
        </div>

    )
}

export default EditTools