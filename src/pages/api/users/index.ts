import {NowRequest, NowResponse} from '@vercel/node';
import knex from '../database/connection';



export default async (req : NowRequest, res : NowResponse) => {
   switch(req.method){
        case 'GET' : {
            const username  = req.query.nome || "";
            console.log(username);
            if(username !== ""){
                const user =  await knex('usuario').select('*').where({username : username}).first();
                if(user)
                        return res.json(user);
                    else
                        return res.status(404).json('Usuario não encontrado!');
            }
            else{
                    const users = knex('usuario').select('*');
                    if(users)
                        return res.json(users);
                    else
                        return res.status(404).json('Nenhum Usuario Encotrado!');
            }
        }
        
        case 'POST' : {
            const {username, nome, level, currentExperience, challengeCompleted, imagem} = req.body;
            try{
                const trx = await knex.transaction();
                //Inserir não esqueça do await
                const id = await trx('usuario').insert({username, nome, level, currentExperience, challengeCompleted, imagem});
                await trx.commit();
                if(id) 
                    return res.json(id);
                else
                    return res.status(500).json('Não foi possivel inserir usuario');
                }catch(error){
                    console.log(error);
                    return res.status(500).json('Não foi possivel inserir usuario');
            }            
        }
   }

};