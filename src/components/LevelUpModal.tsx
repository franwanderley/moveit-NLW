import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/levelup-modal.module.css';

export function LevelUpModal(){
    const {level, closeModal} = useContext(ChallengesContext);
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level</p>

                <button type="button" onClick={ closeModal }>
                    <img src="icons/close.svg" alt="fechar"/>
                </button> 
            </div>
        </div>
    );
}