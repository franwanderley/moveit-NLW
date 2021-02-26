import {createContext, ReactNode, useEffect, useState} from 'react';
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';
import { LevelUpModal } from '../components/LevelUpModal';


interface ChallengesProviderProps {
    children           : ReactNode;
    level              : number;
    currentExperience  : number;
    challengeCompleted : number;
}
interface ActiveChallenge  {
    type              : string;
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
    closeModal            : () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);
export function ChallengesProvider({ children, ...rest} : ChallengesProviderProps) {
    const [level, setLevel] = useState<number>(rest.level ?? 1);
    const [currentExperience,setCurrentExperience] = useState<number>(rest.currentExperience ?? 0);
    const [challengeCompleted, setChallengeCompleted] = useState<number>(rest.challengeCompleted ?? 0);
    const [activeChallenge, setActiveChallenge] = useState<ActiveChallenge>(null);
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState<boolean>(false);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2); 

    function levelUp(){
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);
    }
    function completeChallenge() {
        if( activeChallenge.amount <= 0 )
            return ;
        console.log([activeChallenge, currentExperience]);
        const { amount } = activeChallenge;
        let finalExperience = currentExperience + amount;
        if(finalExperience >= experienceToNextLevel){
            levelUp();
            setCurrentExperience(finalExperience - experienceToNextLevel);
        }else
            setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengeCompleted(challengeCompleted + 1);
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

    function closeModal(){
        setIsLevelUpModalOpen(false);
    }

    //Notificação
    useEffect(() => {
        Notification.requestPermission();
    }, []);

    //Salvar em cookies
    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengeCompleted', String(challengeCompleted));

    }, [level, currentExperience, challengeCompleted]);

    return (
        <ChallengesContext.Provider value={{ level, currentExperience, challengeCompleted, startNewChallengs, activeChallenge, resetChallenge, experienceToNextLevel, completeChallenge, closeModal}}>
       { isLevelUpModalOpen && <LevelUpModal/> }
            {children}
        </ChallengesContext.Provider>
    );
} 