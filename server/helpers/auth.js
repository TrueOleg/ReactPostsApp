const  jwt = require('jsonwebtoken');
const config = require('../config/config');
const {secret} = config.jwt

function signToken(user_id) {
  let id = jwt.sign({ id: user_id }, secret, { expiresIn: '7d' });
  return id
}
function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  
  jwt.verify(token, secret, function(err, decoded){
    console.log(decoded);
    req._userId = decoded.id
    next(err)
    
      
  });

}

module.exports={signToken, verifyToken}