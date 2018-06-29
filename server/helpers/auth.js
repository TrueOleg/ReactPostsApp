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
    if (decoded) {
      req._userId = decoded.id
    } else {
      next(new Error('can\'t decode'))
    }
    
    next(err)
    
      
  });

}

module.exports={signToken, verifyToken}