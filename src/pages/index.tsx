import {useRouter} from 'next/router';
import  Head  from "next/head";
import {FaGithub, FaSignInAlt} from 'react-icons/fa';
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import swal from 'sweetalert';
import axios from "axios";
import styles from '../styles/login.module.css';

interface UserGithub{
  login : string;

}

export default function Login() {

    function handleUsername(event : ChangeEvent<HTMLInputElement>){
        setUsername(event.target.value);
    }

    async function onLogin(event : FormEvent){
      event.preventDefault();
      sessionStorage.clear();
      try {
        const user = await axios.get('https://api.github.com/users/'+ username).then(res => res.data as UserGithub);
        if(user?.login){
          sessionStorage.setItem('moveit/username', username);
          Router.push('/'+ user?.login);
        }
        else
          swal({title:"Username não encotrado!", text:"Tente Novamente", icon: "warning"});
        } catch (error) {
          console.log(error);
          swal({title:"Username não encotrado!", text:"Tente Novamente", icon: "warning"});
      }
    }

    const Router = useRouter();
    const [username, setUsername] = useState<string>("");
    useEffect(() => {
      
    }, []);
    return (
        <div className={styles.container}> 
            <Head>
                <title> Login | Moveit </title>
            </Head>
            <div className={styles.logobg}>
                <img src="logo-gradient.png" alt="logo gradient"/>
            </div>
            <div className={styles.divlogin}>
                <h1>
                    <img src="favicon.png" alt="logo"/>
                    move<span>.</span>it
                </h1>
                <h3>Bem Vindo!</h3>
                <p><FaGithub/> Faça login com seu GitHub para começar</p>
                <form onSubmit={onLogin} >
                  <div className={styles.formlogin}>
                    <input type="text" onChange={handleUsername} required placeholder="seu username"/>
                    <button type="submit"><FaSignInAlt/></button>
                  </div>
                </form>

            </div>
        </div>
    );
}