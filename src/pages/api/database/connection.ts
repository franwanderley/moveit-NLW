import knex from 'knex';
import path from 'path';

    const db = knex({
        client : 'sqlite3',
        connection: {
            //Onde o BD está
            filename : './src/pages/api/database/database.sqlite'
        },
        useNullAsDefault: true
    });
    export default db;    


/*  connection : { 
            host : "127.0.0.1",
            user : "root",
            password : "",
            database : "moveit"
        } */