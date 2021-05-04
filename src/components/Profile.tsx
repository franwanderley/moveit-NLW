import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/profile.module.css';

interface PropsProfile{
    name  : string;
    image : string;
}

export function Profile(props : PropsProfile){
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileCotainer}>
            <img src={props?.image} alt="Imagem do perfil"/>
            <div>
                <strong>{props?.name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
};