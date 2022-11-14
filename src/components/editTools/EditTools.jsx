import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPen, faTrash, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import Button from '../button/Button'
import style from './../button/style.module.scss'

const EditTools = ({ details, setDetails, setEdit, setValue, id, completed, title }) => {
    function changeItem(id, title) {
        setEdit(id)
        setValue(title)
    }
    function deleteItem(id) {
        let newDat = details.filter(item => item.id !== id)
        setDetails(newDat)
    }
    function complete(id) {
        let newData = details.map(item => {
            if (item.id === id) {
                return ({ ...item, completed: !item.completed })
            }
            return item
        })
        setDetails(newData)
        console.log(newData)
        console.log(completed);
    }
    return (
        <div className={style.buttons}>
            {completed ?
                <Button onClick={() => complete(id)} ><FontAwesomeIcon icon={faCircleXmark} /></Button>
                :
                <Button onClick={() => complete(id)} ><FontAwesomeIcon icon={faCircleCheck} /></Button>}
            <Button onClick={() => changeItem(id, title)} ><FontAwesomeIcon icon={faPen} /></Button>
            <Button onClick={() => deleteItem(id)} ><FontAwesomeIcon icon={faTrash} /></Button>
        </div>

    )
}

export default EditTools