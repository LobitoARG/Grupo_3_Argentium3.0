function authMiddleware (req, res, next){
    if(req.session.usuarioLogeado != undefined){
        next();
    }
    else{
        res.redirect('/user/login');
    }

}

module.exports = authMiddleware;