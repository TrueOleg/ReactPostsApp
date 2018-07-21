const express = require('express');
const router = express.Router();

const { sequelize } = require('../models/sequelize');
const models = require('../models/sequelize');
const auth = require('../helpers/auth');

const verify = auth.verifyToken;
const Op =sequelize.Op;
const fn = sequelize.fn;
const col = sequelize.col;
const where = sequelize.where;
// select users.id, name, followers.id from users left join followers on users.id = follower
// and following = 1 or following = users.id and follower = 1 
// where users.name ilike '%s%' and not users.id=1
router.get('/search', verify, async (req, res, next) => {
    try {
        const userName = req.query.char;
        const myId = req._userId;
        
        // const users = await sequelize.query(`SELECT users.id, name, followers.id FROM users LEFT JOIN followers ON users.id = follower
        //     AND following = 1 OR following = users.id AND follower = 1 
        //     WHERE users.name ILIKE '%s%' AND NOT users.id=1`)

        
        const users  = await models.Users.findAll({ 
            attributes: [ 'name'],
            where: {
                [Op.and]: {
                    name: {
                        [Op.iLike]: `${userName}` + '%',
    
                    },
                    id: {
                        [Op.not]: myId
                    }
                },
            },
            raw: true, 
            include: {
                as: 'Following',
                model: models.Users,
                attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'cool']],
                where: {
                    [Op.or]: [
                            where(col('follower'), myId),
                            
                            ]
                } ,
                
                raw: true,
                required: false   
            }  
        });
        console.log('users', users );   

        

        res.status(200).send({
        message: 'success',
        result: true,
        users
        });     
    }
    catch(err) {
        next(new Error(err.message));
    }
});

module.exports = router;