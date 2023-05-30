import { mysqlConnection } from "../../core/db_config.js";

export const createuser_middleware = async (req, res, next) => {
  if (!req.body)
    return res
      .status(400)
      .json({ status: "failed", message: "cannot pass empty request" });
  // console.log(req.body)

  const { first_name, last_name, phone, email } = req.body;

  if (!first_name) {
    return res
      .status(400)
      .json({ status: "failed", message: "first name required" });
  }
  if (!last_name) {
    return res
      .status(400)
      .json({ status: "failed", message: "last_name required" });
  }
  if (!phone) {
    return res
      .status(400)
      .json({ status: "failed", message: "phone required" });
  }
  if (!email) {
    return res
      .status(400)
      .json({ status: "failed", message: "email required" });
  }

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if(!emailRegex.test(email)){
    return res
      .status(400)
      .json({status: "failed", message: "Invalid email input" });
  }

  const phoneNumberRegex = /^\+234\d{10}$/;

  // Test the regex
  // const phoneNumber = "+234123456789";
  if (!phoneNumberRegex.test(phone)) {
    return res
      .status(400)
      .json({status: "failed", message: "Invalid Phone Input - e.g +2348xxxxxxxxx" });
  }

  //test if phone and email already exists in the database
  const sql1 = "SELECT * FROM users_table WHERE email = ?";
  const sql2 = "SELECT * FROM users_table WHERE phone = ?";
  mysqlConnection.query(sql1, [email], async (err, result) => {
    if (result[0]) {
      return res.status(400).json({ status: "failed",message: "account with email exits" });
    } 
    else {
      mysqlConnection.query(sql2, [phone], async (error, result) => {
        console.log(result);
        if (result[0]){
          return res.status(400).json({ status: "failed",message: "account with phone exits" });
        }
        else{
          next();
        }
      });
    }
  });

 
};
