import axios from 'axios';
import { GetStaticProps } from 'next';
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
    
    useEffect(() => {
        if(! sessionStorage?.getItem('moveit/username'))
            Router.push('/');
        else
            setUsername(sessionStorage?.getItem('moveit/username'));
        console.log(props.usuarios[0].nome);
    }, [props]);

    return (
        <div className={styles.container} >
            <Sidebar login={username} />
            <div className={styles.leaderboard}>
                <h2>Leaderboard</h2>
                <table>
                    <tr>                        
                        <th>posição</th>
                        <th>Usuário</th>
                        <th>Desafios</th>
                        <th>Experiência</th>
                    </tr>
                    {props.usuarios.map(user => (
                        <tr>
                            <td>{++i}</td>
                            <td>
                                <div>
                                    <img src={user.imagem} alt={user.username}/>
                                    {user.nome}
                                </div>
                                <div className={styles.level}>
                                    <img src="icons/level.svg" alt="Level"/> {user.level}
                                </div>
                            </td>
                            <td>{user.challengeCompleted} completados</td>
                            <td>{user.currentExperience} xp</td>
                        </tr>
                    ))}
                    
                </table>
            </div>

        </div>

    );
} 

export const getStaticProps : GetStaticProps = async ( ctx ) => { 
    const usuarios = await axios({method: "GET", url: `${process.env.PARTH}/api/ranking`})
        .then(res => res.data).catch(error => null);
    return {
        props : { usuarios }
    }
}