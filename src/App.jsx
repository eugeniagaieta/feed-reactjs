import { Headerr } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

function App(){
  return(
    <>
       <Headerr/>

       <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            <Post
              author='Eugenia gaieta'
              content=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
               Reprehenderit velit quaerat ut voluptates officiis esse excepturi sed minima 
              alias quis necessitatibus praesentium, quos laboriosam voluptatibus, nulla inventore ad error unde?'
            />

            <Post
              author='Gabriel'
              content='gabriel come muito pao'
            />
          </main>
       </div>
    </>
  )
}

export default App