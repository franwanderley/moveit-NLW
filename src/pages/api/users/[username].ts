import { NowRequest, NowResponse } from "@vercel/node";
import knex from "../database/connection";


export default async (req : NowRequest, res : NowResponse) => {
    const {method} = req;
    
    switch(method){
        case 'PUT' : {
            const {username} = req.query;
            const {level, currentExperience, challengeCompleted} = req.body;
            console.log([level, currentExperience, challengeCompleted, username]);
            
            const trx = await knex.transaction();
            const id = await trx('usuario').update({level, currentExperience, challengeCompleted}).where({username : username});
            await trx.commit();

            if(id)
                return res.json(id);
            else
                return res.status(500).json('Não foi possivel atualizar usuario');
        }
    }
}