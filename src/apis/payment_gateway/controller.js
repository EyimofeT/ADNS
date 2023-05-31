
import { mysqlConnection } from '../../core/db_config.js';
import {getenv} from '../../core/helper.js'
import axios from 'axios';

//function calls user management api and user wallet api to 
export const charge=async (req,res)=>{
    const {user_id,amount}=req.body
    try {
        //this block fetches user data from the user management api
        const url = `${getenv('USER_API_URL')}${user_id}`; 
        const response = await axios.get(url)
        const statusCode = response.status;
        
        let message,status;

        if (!statusCode === 200) {
            return res.status(200).json({status:"failed", message:"An error occured"});
        } 

        if(response.data.status!="success"){
            status=response.data.status
            message=response.data.message
            return res.json({ status: status, message });
        }
        
        //user information from the user management api
        const { first_name, last_name, email, phone}=response.data.data
         
          
        //this block calls on wallet management api to effect the charge on the account
        const wallet_url = `${getenv('WALLET_API_URL')}debit`; 
        const requestData = {"user_id":user_id, "amount":amount};
        const debit_response = await axios.post(wallet_url,requestData)
        const debit_statusCode = debit_response.status;

        if (!debit_statusCode === 200) {
            return res.status(200).json({status:"failed", message:"An error occured"});
        } 
        if(debit_response.data.status!="success"){
            //in here wallet charge failed
            status=debit_response.data.status
            message=debit_response.data.message
            
            //call notification api for failed transaction
            const notification_url = `${getenv('NOTIFICATION_API_URL')}send_mail`; 
            const notification_requestData = {"first_name":first_name, "last_name":last_name, "amount":amount,"status":debit_response.data.status,"email":email};
            const notification_response = await axios.post(notification_url,notification_requestData)
            return res.json({ status: status, message });

        }

        //call notification api for successful transaction
        const notification_url = `${getenv('NOTIFICATION_API_URL')}send_mail`; 
        const notification_requestData = {"first_name":first_name, "last_name":last_name, "amount":amount,"status":debit_response.data.status,"email":email};
        const notification_response = await axios.post(notification_url,notification_requestData)
        
        
       return res.status(200).json({status:"success", message:"Account Charge Successful"});
    
    } catch (error) {
        // console.error('Error calling internal API:', error);
        res.status(500).json({ error: error });
      }
}


