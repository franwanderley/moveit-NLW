import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import { CountdownContext } from '../context/CountdownContext';
import styles from '../styles/challenge-box.module.css';

export function ChallengeBox(){
    
    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();
        
    }
    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }
    
    const {resetCountdown} = useContext(CountdownContext);
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header> Ganhe {activeChallenge.amount} xp </header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="Exercite"/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button type="button" onClick={handleChallengeFailed}
                            className={styles.challengeFaleidButton}>
                            Falhei
                        </button>
                        <button type="button" onClick={handleChallengeSucceeded}
                            className={styles.challengeSucceededButton}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber desafios</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de Level completando desafios.
                    </p>
                </div>
            )}
        </div>
    );
}