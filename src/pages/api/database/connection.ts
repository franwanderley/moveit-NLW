import knex from 'knex';

    const db =  knex({
        client : 'mysql', 
        connection : { 
            host     : process.env.MYSQL_HOST,
            port     : Number(process.env.MYSQL_PORT),
            user     : process.env.MYSQL_USER,
            password : process.env.MYSQL_PASSWORD,
            database : process.env.MYSQL_DB
        }
    });
    export default db;    


/*  connection : { 
            host : "127.0.0.1",
            user : "root",
            password : "",
            database : "moveit"
        } */