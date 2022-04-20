function guestMiddleware (req, res, next){
    if(req.session.usuarioLogeado == undefined){
        next();
    }
    else{
        res.redirect('/');
    }

}

module.exports = guestMiddleware;