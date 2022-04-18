function authMiddleware (req, res, next){
    if(req.session.usuarioLogeado != undefined){
        next();
    }
    else{
        res.render('productCart');
    }

}

module.exports = authMiddleware;