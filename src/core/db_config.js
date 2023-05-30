import mysql from 'mysql'
import dotenv from 'dotenv'
import {getenv} from './helper.js'

dotenv.config()

export var mysqlConnection = mysql.createConnection({
    host: getenv('DB_HOST'),
    user: getenv('DB_USER'),
    database: getenv('DB_NAME'),
    password: getenv('DB_PASSWORD'),
    port:getenv('DB_PORT'),
    multipleStatements: true,
})


mysqlConnection.connect((err)=>{
    if(!err)
    console.log("Connected To Database")
    else
    console.log("Error" + JSON.stringify(err,undefined, 2))
    
})