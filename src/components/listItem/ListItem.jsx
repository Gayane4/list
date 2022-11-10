import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPen, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import style from './style.module.scss'
import Button from '../button/Button'
import Input from '../input/Input'


const ListItem = ({id,title,details,setDetails,number,completed}) => {
    const [edit, setEdit] = useState('')
    const [value, setValue] = useState('')
    function changeItem(id, title) {
        setEdit(id)
        setValue(title)
    }
    function saveItem(id) {
        let newData = details.map(item => {
            if (item.id === id) {
                item.title = value
            }
            return item
            
        })
        setDetails(newData)
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
    function deleteItem(id){
      let newDat = details.filter(item => item.id !== id)
      setDetails(newDat)
    }

    // const [completes,setCompletes] = useState(true)
    function complete(id){
      let newData = details.map(item =>{
        if(item.id === id){
          // return ({...item,completed: setCompletes(!item.completed)})
          return ({...item, completed: !item.completed})
        }
        return item
      })
      setDetails(newData)
      console.log(newData)
      console.log(completed);
    }
    
    return (

            <div className={style.listItem} key={id}>
              <div className={style.listItemBlock}>
              <p>{number}</p>
              {edit === id? <Input  onChange={(e)=> setValue(e.target.value)} value={value}/> : <h2 className={completed ? style.false : style.true}>{title}</h2>}
              </div>
              {edit === id
                ? <div className={style.buttons}>
                  <Button onClick={(e) => saveItem(id)}><FontAwesomeIcon icon={faCheck} /></Button>
                  <Button onClick={() => noChangeItem(id)} >X</Button>
                </div>
                : <div className={style.buttons}>
                  <Button onClick={() => complete(id)} ><FontAwesomeIcon icon={faCircleCheck} /></Button>
                  <Button onClick={() => changeItem(id, title)} ><FontAwesomeIcon icon={faPen} /></Button>
                  <Button onClick={() => deleteItem(id)} ><FontAwesomeIcon icon={faTrash} /></Button>
                </div>
              }


            </div>
          )}

    

export default ListItem