
import morgan from 'morgan';
import dotenv from 'dotenv'
dotenv.config()
import gateway from 'fast-gateway';
import {getenv} from './src/core/helper.js'

const port = getenv("GATEWAY_PORT");
const server = gateway({
    routes: [
        {
            prefix: `${getenv('BASE_URL')}wallet`,
            target: getenv('WALLET_API_URL'),
            hooks: {}
        },
        {
            // "api/v1/users"
            prefix: `${getenv('BASE_URL')}users`,
            target: getenv('USER_API_URL'),
            hooks: {}
        },
        {
            prefix: `${getenv('BASE_URL')}payment`,
            target: getenv('PAYMENT_API_URL'),
            hooks: {}
        },
        {
            prefix: `${getenv('BASE_URL')}notification`,
            target: getenv('NOTIFICATION_API_URL'),
            hooks: {}
        }
    ]
});

// Logging middleware
server.use(morgan('combined'));

server.get('/mytesting', (req,res)=> {
    
    res.send(getenv('BASE_URL'));
})

server.start(port).then(server=>{
    console.log("Gateway is running "+port);
})