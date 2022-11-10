import React, { useState } from 'react'
import Button from '../button/Button'
import Input from '../input/Input'
import style from './style.module.scss'


const AddList = ({ details, setDetails, setShowAdd }) => {
  const [title, setTitle] = useState('')
  function addItem() {
    const newItem = {
      id: details.length + 1,
      title,

    }
    setDetails([...details, newItem])
    setShowAdd(false)
  }
  function cancel(){
    setShowAdd(false)

  }
  return (
    <div className={style.background}>
      <div className={style.addContainer}>
        <h3>Add new post</h3>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        <div className={style.button}>
        <Button onClick={addItem}>Save</Button>
        <Button onClick={cancel}>Cancel</Button>
        </div>
       
      </div>
    </div>

  )
}

export default AddList