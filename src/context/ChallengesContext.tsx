import {createContext, ReactNode, useEffect, useState} from 'react';
import challenges from '../../challenges.json';

interface ChallengesProviderProps {
    children : ReactNode;
}
interface ActiveChallenge  {
    type              : 'body' | 'eye';
    description       : string;
    amount            : number; 
};
interface ChallengesContextData{
    level                 : number; 
    currentExperience     : number;
    challengeCompleted    : number; 
    startNewChallengs     : () => void;
    activeChallenge       : ActiveChallenge;
    resetChallenge        : () => void;
    completeChallenge     : () => void;
    experienceToNextLevel : number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);
export function ChallengesProvider({ children } : ChallengesProviderProps) {
    const [level, setLevel] = useState<number>(1);
    const [currentExperience,setCurrentExperience] = useState<number>(0);
    const [challengeCompleted, setChallengeCompleted] = useState<number>(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2); 

    function levelUp(){
        setLevel(level + 1);
    }
    function completeChallenge() {
        console.log('completeChallenge');
        if(! activeChallenge)
            return ;
        const { amount } = activeChallenge;
        let finalExperience = currentExperience + amount;
        if(finalExperience >= experienceToNextLevel){
            levelUp();
            setCurrentExperience(finalExperience - experienceToNextLevel);
            setActiveChallenge(null);
            setChallengeCompleted(challengeCompleted + 1);
        }
    }

    function startNewChallengs(){
       const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
       setActiveChallenge(challenges[randomChallengeIndex]);
        //Audio
        new Audio('/notification.mp3').play();
       //Notificação
       if(Notification.permission === "granted"){
           new Notification('Novo Desafio', {
               'body' : `Valendo ${challenges[randomChallengeIndex].amount} xp!`,
               'icon' : `favicon.png`
           })
       }
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    useEffect(() => {
        Notification.requestPermission();
    }, []);

    return (
    <ChallengesContext.Provider value={{ level, currentExperience, challengeCompleted, startNewChallengs, activeChallenge, resetChallenge, experienceToNextLevel, completeChallenge}}>
            {children}
        </ChallengesContext.Provider>
    );
} 