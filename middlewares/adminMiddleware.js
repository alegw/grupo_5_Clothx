function adminMiddleware(req,res,next){
    if(req.session && req.session.userLogeado){
        if(req.session.userLogeado.category == 1){
            
            next();
            
        }
    }
    res.redirect("/");
    
}


module.exports = adminMiddleware;