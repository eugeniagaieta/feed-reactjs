import styles from'./Post.module.css'

import Img from '../Assets/Rectangle 4235 (1).png'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post(){
    return(
        <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                    <Avatar hasBorder src={Img}/>
                    <div className={styles.authorInfo}>
                        <strong>Marcia Gaieta</strong>
                        <span>web Developer</span>
                    </div>
                    </div>

                    <time title='10 de outobro as 11:00'  dateTime="2024-10-10">Publicado ha 1h</time>
                </header>

                <div className={styles.content}>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                    <p>👉{''} <a href="">jane.design/doctorcare</a></p> 
                   <p> 
                        <a href="">#novoprojeto</a>{' '}
                        <a href="">#nlw </a>{' '}
                        <a href="">#rocketseat</a>
                    </p>
                </div>

                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea 
                        placeholder='Deixe um comentario'
                    />
                    <footer>
                        <button type='submit'>Publicar</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>
        </article>
    )
}