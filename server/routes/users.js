const express = require('express');
const router = express.Router();

const { sequelize } = require('../models/sequelize');
const models = require('../models/sequelize');
const auth = require('../helpers/auth');

const verify = auth.verifyToken;
const Op =sequelize.Op;
// select users.id, name, followers.id from users left join followers on users.id = follower
// and following = 1 or following = users.id and follower = 1 
// where users.name ilike '%s%' and not users.id=1
router.get('/search', verify, async (req, res, next) => {
    try {
        const userName = req.query.char;
        const myId = req._userId;
        
        const usersFollowing = await models.Users.findAll({ 
            attributes: ['id', 'name'],
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
                attributes: ['id'],
                model: models.Followers,
                where: {
                    [Op.and]: {
                        'following': 'users.id',
                    }
                },
                targetKey: {
                    'follower': myId,
                },
                // raw: true   
            }    

        });   

        console.log('usersFollowing', usersFollowing);
        const usersFollowers = await models.Users.findAll({ 
            attributes: ['id', 'name'],
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

                attributes: ['id'],
                model: models.Followers,
                where: {
                        'follower': myId,
                },
                targetKey: {
                    'following': 'users.id',
                },
                raw: true   
            }    
        
            // include: {
            //     attributes: ['id'],
            //     model: models.Followers,
            //     where: {
            //             'following': 'users.id',
            //     },
            //     // where: {
            //             // 'follower': myId,
            //         // [Op.or]: [
            //         //     {[Op.and] : [{'follower': 'users.id'}, {'following': myId}]},
            //         // ]
            //         // [Op.or]: [
            //         //     {[Op.and] : [{'follower': 'users.id'}, {'following': myId}]},
            //         //     {[Op.and] : [{'following': 'users.id'}, {'follower': myId}]},
            //         // ]
            //     // },
            //     targetKey: {
            //         'follower': myId,
            //     },
            //     raw: true   
            // },

        });  

        const users = usersFollowers.concat(usersFollowing);

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