function authMiddleware (req, res, next){
    if(req.session.usuarioSession != undefined){
        next();
    }
    else{
        res.render('productCart');
    }

}

module.exports = authMiddleware;