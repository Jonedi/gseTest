import mongoose from "mongoose"
import mysql from "mysql2"
import Client from 'pg'
import sql from 'mssql'
import oracledb from 'oracledb'

const connect = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}

if (process.env.TYPEDB === "mongodb") {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.URL_DB)
        console.log("Conexión a la DB Ok 👍");
    } catch (e) {
        console.log("error de conexión a Mongo" + e);
    }
} else if(process.env.TYPEDB === "mysql") {
    const connection = mysql.createConnection(connect)
    connection.connect(e => {
        if (e) {
            console.error("Error al conectarse a la base de datos", e);
            return
        } else {
            console.log("Conexión a la base de datos establecida");
        }
    })
    connection.end()
} else if(process.env.TYPEDB === "postgres") {
    const client = new Client(connect)
    try {
        console.log("Conexion establecida");
    } catch (e) {
        console.log("Error al conectar", e);
    }
} else if(process.env.TYPEDB === "sqlserver") {
    sql.connect(config).then(pool => {
        console.log("Conexión a la base de datos establecida")
    }).catch(e => { console.log("Error al conectarse a la base de datos", e)})
} else if (process.env.TYPEDB === "oracle") {
    const config = {
        user: process.env.USER,
        password: process.env.PASSWORD,
        connectString: process.env.DATABASE
    }
    oracledb.getConnection(config, (e, connection) => {
        if (e) {
          console.error(e.message);
          return;
        }
        console.log('Conexión exitosa a Oracle!');
    });
}
