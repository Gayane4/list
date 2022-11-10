import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import style from './style.module.scss'



const AddItem = ({ details, setDetails }) => {
  const [title, setTitle] = useState('')
  function addItem() {
    const newItem = {
      id: details.length + 1,
      title,

    }
    setDetails([...details, newItem])
  }
  return (
    <div className={style.addContainer}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={addItem}><FontAwesomeIcon icon={faPlus} /></button>
    </div>
  )
}

export default AddItem