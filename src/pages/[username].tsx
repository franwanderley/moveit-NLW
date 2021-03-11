import Head from 'next/head';
import {GetServerSideProps} from 'next';
import axios from 'axios';
import {useRouter} from 'next/router';
import styles from '../styles/home.module.css';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from '../context/CountdownContext';
import { ChallengesProvider } from '../context/ChallengesContext';
import { useEffect } from 'react';
import { Sidebar } from '../components/Sidebar';

interface HomeProps {
  nome               : string;
  imagem             : string;
  level              : number;
  currentExperience  : number;
  challengeCompleted : number;
}
interface UserGithub{
  login      : string;
  name       : string;
  avatar_url : string;
}

export default function Home(props : HomeProps) {
  
  const router = useRouter();
  const {username} = router.query; //Vai pegar o id dinamico

  useEffect(() => {
    if(!sessionStorage.getItem('moveit/username')){
      router.push('/');
    }
  }, []);

  return (
    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengeCompleted={props.challengeCompleted}>
      <div className={styles.container}>
        <Head>
          <title> Inicio | Moveit </title>
        </Head>
        <div className={styles.sidebar}>
              <Sidebar login={String(username)}/>
        </div>
       <div className={styles.main}>
          <ExperienceBar/>
            <CountdownProvider>
                <section>
                  <div>
                  <Profile name={props?.nome} image={props.imagem}/>
                  <CompletedChallenges/>
                  <Countdown/>
                  </div>
                  <div>
                  <ChallengeBox/>
                  </div>
                </section>
            </CountdownProvider>
       </div>
    </div>
    </ChallengesProvider>
  )
}

//E aqui onde vamos pegar os dados do back end
export const getServerSideProps : GetServerSideProps = async (ctx) => { 
  //Usar Axios
  const {username} = ctx.params;
  
  const user = await axios.get( `${process.env.PARTH}/api/users?nome=${username}` )
  .then(res => res.data as HomeProps)
  .catch(error => null);
  if(user){
    return {
      props : { 
                nome               : String(user?.nome),
                imagem             : String(user?.imagem),
                level              : Number(user?.level),
                currentExperience  : Number(user?.currentExperience),
                challengeCompleted : Number(user?.challengeCompleted)
      }
    }
  }else{
    //porque não existe
    const userGithub = await axios.get('https://api.github.com/users/'+ username).then(res => res.data as UserGithub);
    const data = {
      username,
      nome : (userGithub?.name === "null" ? userGithub?.name : username),
      level : 1,
      currentExperience : 0,
      challengeCompleted : 0,
      imagem : userGithub?.avatar_url
    }
    const iduser = await axios.post('http://localhost:3000/api/users', data).then(res => res.data);
    if(iduser){
      return {
        props : { 
                  nome               : String(data?.nome),
                  imagem             : String(data?.imagem),
                  level              : Number(data?.level),
                  currentExperience  : Number(data?.currentExperience),
                  challengeCompleted : Number(data?.challengeCompleted)
        }
      }
    }else
      return { props : {} }
  }

}