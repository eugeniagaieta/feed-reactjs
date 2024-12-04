import { PencilLine} from 'phosphor-react' 

import styles from'./Sidebar.module.css';

import Img from'../Assets/Rectangle 4240 (1).png'
import { Avatar } from './Avatar';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>

            <img className={styles.cover} src={Img} alt=''/>

            <div className={styles.profile}>
                <Avatar hasBorder src="https://avatars.githubusercontent.com/u/92613336?v=4"/>

                <strong>Marcia Gaieta</strong>
                <span>web developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    editar seu perfil
                </a>
            </footer>
        </aside>   
    )
}