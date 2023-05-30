
import { mysqlConnection } from '../../core/db_config.js';
import crypto from 'crypto'

//function returns all users in the database
export const getUsers = (req, res) => {
   
    try {
            mysqlConnection.query(`select user_id,first_name,last_name,phone,email,balance from users_table`, (err, rows, fields) => {
                if (!err)
                res.status(200).json({status:"success", message:"all users fetched", data:rows})
                else
                    res.status(400).json({ message: err })
            })
       
    } 
    catch {
        return res.status(400).json({ message: "An Error Occured!" });
    }

}


//function creates inserts a new user into the database
export const createUsers=(req,res)=>{
    
    try{
    const {first_name,last_name,phone,email} = req.body;
    const user_id=crypto.randomUUID()

    mysqlConnection.query('INSERT INTO `users_table`(`first_name`, `last_name`, `email`, `phone` ,`user_id`) VALUES (?,?,?,?,?)',
        [first_name.toLowerCase(),last_name.toLowerCase(),email.toLowerCase(),phone,user_id], (error,results) =>{
            if(error) throw res.json(error);
            console.log("error")
            return res.json({"status":"success",message:"User Created Successfully"});
              });
    }
    catch{
        return res.status(400).json({status: "failed",message: "An Error Occured"});
    }
}


//function returns user in the database with given  user_id
export const getUser = (req, res) => {
    const id=req.params.id
    try {
            mysqlConnection.query(`select user_id,first_name,last_name,phone,email,balance from users_table where user_id=?`,[id], (err, rows, fields) => {
                
                if (!err){
                    if(rows[0])
                    res.status(200).json({status:"success", message:"user fetched", data:rows[0]});
                    else
                    res.status(200).json({ status: "failed", message: "user not found" })
                }
                
            })
       
    } 
    catch {
        return res.status(400).json({ message: "An Error Occured!" });
    }

}
