import { mysqlConnection } from "../../core/db_config.js";



export const credit_middleware = async (req,res,next)=>{
    if (!req.body)
    return res
      .status(400)
      .json({ status: "failed", message: "cannot pass empty request" });

      const { user_id, amount } = req.body;

  if (!user_id) {
    return res
      .status(400)
      .json({ status: "failed", message: "user_id required" });
  }
  if (!amount) {
    return res
      .status(400)
      .json({ status: "failed", message: "amount required" });
  }
  if (amount<=0) {
    return res
      .status(400)
      .json({ status: "failed", message: "invalid amount input" });
  }

  const numberRegex = /^-?\d+(\.\d+)?$/;
  const input = "42";
    if (!numberRegex.test(amount)) {
        return res
        .status(400)
        .json({ status: "failed", message: "invalid amount input- numbers only" });
    } 



  //test if user exists
  const sql1 = "SELECT * FROM users_table WHERE user_id = ?";
  mysqlConnection.query(sql1, [user_id], async (err, result) => {
    if (!result[0]) {
      return res.status(400).json({ status: "failed",message: "account not found" });
    } 
    else{
        next()
    }
   
  });


}

export const debit_middleware = async (req,res,next)=>{
  if (!req.body)
  return res
    .status(400)
    .json({ status: "failed", message: "cannot pass empty request" });

    const { user_id, amount } = req.body;

if (!user_id) {
  return res
    .status(400)
    .json({ status: "failed", message: "user_id required" });
}
if (!amount) {
  return res
    .status(400)
    .json({ status: "failed", message: "amount required" });
}
if (amount<=0) {
  return res
    .status(400)
    .json({ status: "failed", message: "invalid amount input" });
}

const numberRegex = /^-?\d+(\.\d+)?$/;
const input = "42";
  if (!numberRegex.test(amount)) {
      return res
      .status(400)
      .json({ status: "failed", message: "invalid amount input- numbers only" });
  } 


//test if user exists
const sql1 = "SELECT * FROM users_table WHERE user_id = ?";
mysqlConnection.query(sql1, [user_id], async (err, result) => {
  if (!result[0]) {
    return res.status(400).json({ status: "failed",message: "account not found" });
  } 
  next()
  
 
});




}


