import React, { useState } from 'react'
import style from './style.module.scss'
import Input from '../input/Input'
import ConfirmTools from '../confirmTools/ConfirmTools'
import EditTools from '../editTools/EditTools'


const ListItem = ({id,title,details,setDetails,number,completed}) => {
    const [edit, setEdit] = useState('')
    const [value, setValue] = useState('')
    function saveItem(id) {
      setDetails( details.map(item => {
          if (item.id === id) {
              item.title = value
          }
          return item
      }))
      setEdit('')
  }
  function handleKeyPress(e){
    if(e.key === 'Enter'){
      console.log('Enter');
    }
  }
 
  
    return (
            <div className={style.listItem} key={id}>
              <div className={style.listItemBlock}>
              <p>{number}</p>
              {edit === id? <Input onKeyPress ={(e) => handleKeyPress(e)} onChange={(e)=> setValue(e.target.value)} value={value}/> : <h2 className={completed ? style.false : style.true}>{title}</h2>}
              </div>
              {edit === id
              ? <ConfirmTools saveItem={saveItem} details={details} setDetails={setDetails} value={value} setEdit={setEdit} setValue={setValue} id={id}/>
                : 
                <EditTools details={details} setDetails={setDetails} setEdit={setEdit} setValue={setValue} id={id} completed={completed} title={title}/>
              }
            </div>
          )}

    

export default ListItem