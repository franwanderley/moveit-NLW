import { createContext, ReactNode, useContext, useEffect, useState} from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
    minute : number;
    second : number;
    hasFinished : boolean; 
    isActive : boolean;
    resetCountdown : () => void; 
    startCountDown : () => void;
}

 export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider ({children} : {children : ReactNode}) {

    const resetCountdown = () => { setIsActive(false); clearTimeout(countdownTimeout); setHasFinished(false) };
    const startCountDown = () => { setIsActive(true) };

    let countdownTimeout : NodeJS.Timeout;
    const {startNewChallengs} = useContext(ChallengesContext);
    
    const [time, setTime] = useState<number>(0.1 * 60);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [hasFinished, setHasFinished] = useState<boolean>(false);

    const minute = Math.floor(time/60); //Arredonda para baixo
    const second = time % 60; //O resto que será os segundos
    const [minuteLeft, minuteRight] = String(minute).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(second).padStart(2, '0').split('');

    //Para parar e continuar o cronometro
    useEffect(() => {
        if( isActive && time > 0 ){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            },1000);
        }else if(isActive && time === 0){
            setTime(0.1 * 60);
            setIsActive(false);
            setHasFinished(true);
            startNewChallengs();
        }else
            setTime(0.1 * 60);
    
    }, [isActive, time]);

    return (
         <CountdownContext.Provider value = {{minute, second, hasFinished, isActive, resetCountdown, startCountDown}}>
             {children}
         </CountdownContext.Provider>
    );
}