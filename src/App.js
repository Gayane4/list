import React,{useEffect, useState} from 'react';
import s from './global.module.scss'
// import  {data}  from './store/data'
import Title from './components/title';
import List from './components/list/List';
// import AddItem from './components/addItem/AddItem';
import AddList from './components/addlist/AddList';
import axios from 'axios'
import Loading from './components/loading/Loading';



function App() {
  const [details,setDetails]= useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showAdd,setShowAdd]= useState(null)

  useEffect(() => {

    setTimeout(() => {
      fetching()
      .finally(()=>setIsLoading(false))
    }, 3000)

  }, [])

  async function fetching() {
    const post = await axios.get('https://jsonplaceholder.typicode.com/todos')
    setDetails(post.data)
  }
  return (
    <div className={s.App}>
       {isLoading
          ? <Loading title ='Posts' />
          : 
      <div className={s.listContainer}>
        <Title>My Lessons</Title>
        <button className={s.createBtn} onClick={() => setShowAdd(true)}>Create new post</button>
        {/* <AddItem details={details} setDetails={setDetails}/> */}
       
          <List details={details} setDetails={setDetails}/>
        
         {showAdd ? <AddList setShowAdd={setShowAdd} details={details} setDetails={setDetails}/> : showAdd}
      </div> }
    </div>
  );
}

export default App;
