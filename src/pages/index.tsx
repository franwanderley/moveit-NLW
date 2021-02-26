import Head from 'next/head';
import {GetServerSideProps} from 'next';

import styles from '../styles/home.module.css';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from '../context/CountdownContext';
import { ChallengesProvider } from '../context/ChallengesContext';

interface HomeProps {
  level              : number;
  currentExperience  : number;
  challengeCompleted : number;
}

export default function Home(props : HomeProps) {
  return (

    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengeCompleted={props.challengeCompleted}>
      <div className={styles.container}>
    <Head>
      <title> Inicio | Moveit </title>
    </Head>
      <ExperienceBar/>
      <CountdownProvider>
        <section>
          <div>
            <Profile/>
            <CompletedChallenges/>
            <Countdown/>
          </div>
          <div>
            <ChallengeBox/>
          </div>
        </section>
      </CountdownProvider>
    </div>
    </ChallengesProvider>
  )
}

//E aqui onde vamos pegar os dados do back end
export const getServerSideProps : GetServerSideProps = async (ctx) => { 
  const {level, currentExperience, challengeCompleted} = ctx.req.cookies;
  return {
    props : { level              : Number(level),
              currentExperience  : Number(currentExperience),
              challengeCompleted : Number(challengeCompleted)}
  };

}