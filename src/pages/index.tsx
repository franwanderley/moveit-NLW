import Head from 'next/head';
import styles from '../styles/home.module.css';
import { useContext } from 'react';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from '../context/CountdownContext';

export default function Home() {
  return (
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
  )
}
