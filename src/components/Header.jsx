import Styles from '../components/Header.module.css'

import Ignite from '../Assets/Ignite simbolo.png'

export function Headerr(){
        return(
                <header className={Styles.header}>
                        <img src={Ignite} alt="" />
                        <strong>Ignite Feed</strong>
                </header>
        );
}