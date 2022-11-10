import React from 'react'
import ListItem from '../listItem/ListItem'
import style from './style.module.scss'

const List = ({details,setDetails}) => {
if(details.length === 0){
  return(
    <h1>No posts</h1>
  )
  
  
}
  return (
        <div className={style.list} >
          {details.map((item,index) => <ListItem details={details} number={index + 1} setDetails={setDetails}key= {item.id} id={item.id} title={item.title} completed={item.completed}  />
          )}
        </div>
  )
}

export default List