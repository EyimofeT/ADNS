//function checks input 
export const send_mail_middleware= async(req, res, next)=>{
  if (!req.body)
  return res
    .status(400)
    .json({ status: "failed", message: "cannot pass empty request" });

    const { first_name, last_name,email, amount, status } = req.body;

if (!first_name) {
  return res
    .status(400)
    .json({ status: "failed", message: "first name required" });
}
if (!last_name) {
  return res
    .status(400)
    .json({ status: "failed", message: "last name required" });
}
if (!status) {
  return res
    .status(400)
    .json({ status: "failed", message: "status required" });
}
if (!email) {
  return res
    .status(400)
    .json({ status: "failed", message: "email required" });
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

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if(!emailRegex.test(email)){
    return res
      .status(400)
      .json({status: "failed", message: "Invalid email input" });
  }
  next()
}

