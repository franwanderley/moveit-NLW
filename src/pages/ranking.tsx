import axios from 'axios';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {Sidebar} from '../components/Sidebar';
import styles from '../styles/ranking.module.css';

interface Usuarios { 
    username            : string;
    nome                : string;
    level               : number;
    imagem              : string;
    currentExperience   : number;
    challengeCompleted  : number;
}

export default function ranking(props : {usuarios : Usuarios[]} ){
    const Router = useRouter();
    let i = 0;
    const [username, setUsername] = useState<string>("");
    
    //Vai ver se está logado
    useEffect(() => {
        if(! sessionStorage?.getItem('moveit/username'))
            Router.push('/');
        else
            setUsername(sessionStorage?.getItem('moveit/username'));
        console.log(props.usuarios[0].nome);
    }, [props]);

    return (
        <div className={styles.container} >
            <Head>
                <title> Ranking | Moveit </title>
            </Head>
            <Sidebar login={username} />
            <div className={styles.leaderboard}>
                <h2>Leaderboard</h2>
                <table>
                    <tr key={-1}>                        
                        <th key="pos">posição</th>
                        <th key="usu">Usuário</th>
                        <th key="des">Desafios</th>
                        <th key="exp">Experiência</th>
                    </tr>
                    {props?.usuarios?.map(user => (
                        <tr key={i}>
                            <td key={i + 'pos'}>{++i}</td>
                            <td key={i + "usu"}>
                                <div>
                                    <img src={user.imagem} alt={user.username}/>
                                    {user.nome}
                                </div>
                                <div className={styles.level}>
                                    <img src="icons/level.svg" alt="Level"/> {user.level}
                                </div>
                            </td>
                            <td key={i + "des"}>{user.challengeCompleted} completados</td>
                            <td key={i + "exp"}>{user.currentExperience} xp</td>
                        </tr>
                    ))}
                    
                </table>
            </div>

        </div>

    );
} 

export const getStaticProps : GetStaticProps = async ( ctx ) => { 
    const usuarios = await axios({method: "GET", url: `${process.env.PARTH}/user?_sort=challengeCompleted&_order=asc`})
    .then(res => res.data)
    .catch(() => null);
    return {
        props : { usuarios }
    }
}