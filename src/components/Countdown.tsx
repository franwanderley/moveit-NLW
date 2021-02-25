import { useEffect, useState, useContext } from 'react';
import {CountdownContext} from '../context/CountdownContext';
import styles from '../styles/count-down.module.css';

export function Countdown(){

    const { minute,second, isActive, hasFinished, resetCountdown, startCountDown } = useContext(CountdownContext);
    const [minuteLeft, minuteRight] = String(minute).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(second).padStart(2, '0').split('');

    return (
       <>
         <div className={styles.countDownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
               <span>{secondLeft}</span>
               <span>{secondRight}</span>
            </div>
            
        </div>
        { hasFinished ? (
            <button disabled  className={styles.CountDownButton}> Ciclo Encerrado </button>
        ) : (
            <>
                { isActive ? (
                    <button type="button" onClick={ resetCountdown }
                        className={styles.CountDownButtonActive}>
                        Abandonar ciclo
                    </button>
                ) : (
                    <button type="button" onClick={ startCountDown }
                        className={styles.CountDownButton}>
                        Iniciar um Ciclo
                    </button>
                )}
            </> 
        )}

       </>
    );
};