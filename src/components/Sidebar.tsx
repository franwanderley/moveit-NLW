import { FaHome, FaMedal, FaSignOutAlt } from 'react-icons/fa';
import styles from '../styles/side-bar.module.css';
import {useRouter} from 'next/router';

interface SidebarProps{
    login : string;
}

export function Sidebar (props : SidebarProps) {
    const Router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <h1><img src="favicon.png" alt="logo"/></h1>
            </div>
            <div className={styles.menu}>
                <h3 onClick={ () => Router.push(`/${props.login}`) } ><FaHome/></h3>
                <h3 onClick={ () => Router.push('/ranking') } ><FaMedal/></h3>
            </div>
            <div className={styles.signOut}>
                <button type="button" onClick={() => Router.push('/') }> <FaSignOutAlt/></button>
            </div>
        </div>
    );

}