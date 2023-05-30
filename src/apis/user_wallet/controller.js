
import { mysqlConnection } from '../../core/db_config.js';
import crypto from 'crypto'

//function credits account of user specified in the user_id
export const credit = (req, res) => {
    const { user_id, amount } = req.body;
    const credit_sql=`update users_table set balance=balance+? where user_id=?`
    const create_logs_sql='INSERT INTO logs(`user_id`, `amount`, `status`, `transaction_ref` ,`description`) VALUES (?,?,?,?,?)'
    const trans_ref=crypto.randomUUID()
    try {
            mysqlConnection.query(credit_sql,[amount,user_id], (err, rows, fields) => {
                
                if (!err){
                    // creating logs
                    mysqlConnection.query(create_logs_sql,[user_id,parseFloat(amount),'successful',trans_ref,'credit'], (err, rows, fields) => {
                        if (!err){
                            return res.status(200).json({ status: "success", message: "User Account Credited" })
                        }
                        
                    });
                    
                }
                else{
                    res.status(400).json({ status: "failed", message: "Something went wrong!" })
                }
                
              
            })
       
    } 
    catch {
        return res.status(400).json({ message: "An Error Occured!" });
    }

   

}


//function debits account of user specified in the user_id
export const debit =async (req, res) => {
    const { user_id, amount } = req.body;
    const create_logs_sql='INSERT INTO logs(`user_id`, `amount`, `status`, `transaction_ref` ,`description`) VALUES (?,?,?,?,?)'
    const debit_sql=`update users_table set balance=balance-? where user_id=?`
    const trans_ref=crypto.randomUUID()
    const account_balance=await checkbalance(user_id)

    //performs debit and update logs
   
    try {

        if(account_balance<amount){
            // creating logs
            mysqlConnection.query(create_logs_sql,[user_id,amount,'failed',trans_ref,'debit'], (err, rows, fields) => {
              
                
            });
            return res.status(200).json({ status: "failed",message: "insufficient funds" });
        }

            mysqlConnection.query(debit_sql,[amount,user_id], (err, rows, fields) => {
                
                if (!err){
                    // creating logs
                    mysqlConnection.query(create_logs_sql,[user_id,amount,'successful',trans_ref,'debit'], (err, rows, fields) => {
                        if (!err){
                           
                            return res.status(200).json({ status: "success", message: "User Account Debited" })
                        }
                        
                    });
                    
                }
                else{
                    res.status(400).json({ status: "failed", message: "Something went wrong!" })
                }
                
              
            })
       
    } 
    catch {
        return res.status(400).json({ message: "An Error Occured!" });
    }

}

//function returns balance of user with user_id specified
export const  checkbalance=(user_id)=>{
    const sql='select balance from users_table where user_id=?'
    
    return new Promise((resolve, reject)=>{
        mysqlConnection.query(sql, [user_id], async (err, result) => {
            if (err) {
               reject(err) 
              console.log(err);
              return res.status(400).json({ message: "An Error Occured!" });
            }
            resolve(result[0].balance)
          });
    })
   
}


export const Users_logs = (req, res) => {
   
    try {
            mysqlConnection.query(`select * from logs`, (err, rows, fields) => {
                if (!err)
                res.status(200).json({status:"success", message:"all logs fetched", data:rows})
                else
                    res.status(400).json({ message: err })
            })
       
    } 
    catch {
        return res.status(400).json({ message: "An Error Occured!" });
    }

}

//function returns user in the database with given  user_id
export const User_logs = (req, res) => {
    const id=req.params.id
    try {
            mysqlConnection.query(`select * from logs where user_id=?`,[id], (err, rows, fields) => {
                
                if (!err){
                    if(rows[0])
                    res.status(200).json({status:"success", message:"user logs fetched", data:rows})
                    else
                    res.status(400).json({ status: "failed", message: "user not found" })
                }
                
            })
       
    } 
    catch {
        return res.status(400).json({ message: "An Error Occured!" });
    }

}