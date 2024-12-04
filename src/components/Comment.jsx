import styles from './Comment.module.css'

import Img from '../Assets/Profile (1).png'
import { ThumbsUp, Trash } from 'phosphor-react'


export function Comment(){
    return(
        <div className={styles.comment}>
            <img src={Img} alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Herlander Bento</strong>
                            <time title='10 de outobro as 11:00'  dateTime="2024-10-10">Cerca de 1h atras</time>
                        </div>

                        <button title='Deletar comentario'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}