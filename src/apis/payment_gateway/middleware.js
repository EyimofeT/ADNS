export const charge_middleware = async (req,res,next)=>{
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
  


  
next()

  }