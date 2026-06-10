const register = (req,res)=>{
    res.status(200).json({data : req.body});
}

const login = (req,res)=>{
    res.status(200).send("login")
}

export {register,login};