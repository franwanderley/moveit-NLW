import { NowRequest, NowResponse } from "@vercel/node";
import knex from './database/connection';

export default async function (req : NowRequest, res : NowResponse){
    const {method} = req;
    switch(method){
        case "GET" : {
            const usuarios = await knex('usuario').select('*').orderBy("challengeCompleted", "desc");
            if(usuarios)
                return res.json(usuarios);
            else
                return res.status(404).json('Não encotrado!');
        }
    }
}