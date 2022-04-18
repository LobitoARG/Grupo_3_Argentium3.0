const path = require('path');
const fs = require('fs');

const usersFilePath = path.join(__dirname, '../src/data/users.json');
const usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function recordameMiddleware(req, res, next){
    next();

    if (req.cookies.recordarme != undefined && req.session.usuarioLogeado == undefined){
        let users = fs.readFileSync(usersFilePath, 'utf-8');
			users = JSON.parse(users)
			//console.log(users)

			for (let i = 0; i < users.length; i++) {
				//onsole.log(users[i].email)
				if (users[i].email == req.cookies.recordarme){
						var usuarioALoguearse = users[i]
						break;
				}
			}

            req.session.usuarioLogeado = usuarioALoguearse;
    }
}

module.exports=recordameMiddleware;