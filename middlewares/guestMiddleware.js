function guestMiddleware (req, res, next){
    if(req.session.usuarioSession == undefined){
        next();
    }
    else{
        res.render('login');
    }

}

module.exports = guestMiddleware;