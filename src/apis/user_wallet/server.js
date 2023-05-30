import express from 'express';
import walletRoutes from './routes.js'
import morgan from 'morgan';
import bodyParser from 'body-parser';
import {getenv} from '../../core/helper.js'


const app = express();

const port = getenv("WALLET_API_PORT");

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use('/', walletRoutes);


app.listen(port, ()=>{
    console.log("Wallet Management Listening at localhost "+ port);    
})

