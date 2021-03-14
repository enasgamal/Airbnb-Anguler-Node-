const jwt = require('jsonwebtoken');
const {SECRET_KEY}=require("../config");


/*Expect user to pass token as autherization header */
module.exports=(req,res,next)=>{
    const authHeader = req.headers.authorization;
    const error = new Error()
    error.status=403; //you have a token but it's not valid
    let user;
    if(authHeader){
        const token =authHeader.split('=')[1];
        if(token){
            try{
                user =jwt.verify(token,SECRET_KEY);
                req.user=user;
                // console.log(user,token);
                return next();
                // return user.userID;
            }catch(e){
                error.message="invalid/expired";
                return res.json({
                    authorized:false,
                    message:"invalid/expired",
                    success:false
                })
            } 
        }else{
            // here : means token is not present
            error.message="Authozrization token must be Bearer[token]";
            return next(error)
        }
    }
    //here the auth is absent
    error.message="Authorization header must be provided";
    return next(error)

    //  next()
}