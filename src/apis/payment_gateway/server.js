import express from 'express';
import paymentRoutes from './routes.js'
import morgan from 'morgan';
import bodyParser from 'body-parser';
import {getenv} from '../../core/helper.js'

const app = express();

const port = getenv("PAYMENT_API_PORT");


app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use('/', paymentRoutes);

app.get("/mi", (req,res)=>{
    // console.log(req.body)
    res.send("Payment Endpoint called");
});

app.listen(port, ()=>{
    console.log("Payment Management Listening at localhost "+ port);    
})

