import express from 'express';
import notificationRoutes from './routes.js'
import morgan from 'morgan';
import bodyParser from 'body-parser';
import {getenv} from '../../core/helper.js'

const app = express();

const port = getenv("NOTIFICATION_API_PORT");

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use('/', notificationRoutes);

app.get("/mi", (req,res)=>{
    // console.log(req.body)
    res.send("Notification End called");
});

app.listen(port, ()=>{
    console.log("Notification Management Listening at localhost "+ port);    
})

