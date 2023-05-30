import express from 'express';
import usersRoutes from './routes.js'
import morgan from 'morgan';
import bodyParser from 'body-parser';
import {getenv} from '../../core/helper.js'

const app = express();

// const port = 8082;
const port = getenv("USER_API_PORT");

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use('/', usersRoutes);

app.get("/mi", (req,res)=>{
    console.log(req.body)
    res.send("Users End called");
});

app.listen(port, ()=>{
    console.log("User Management Listening at localhost "+ port);    
})

