import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/profile.module.css';

export function Profile(){
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileCotainer}>
            <img src="https://github.com/franwanderley.png" alt="Imagem do perfil"/>
            <div>
                <strong>Francisco Wanderley</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
};