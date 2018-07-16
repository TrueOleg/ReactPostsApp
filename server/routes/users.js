const express = require('express');
const router = express.Router();

const { sequelize } = require('../models/sequelize');
const models = require('../models/sequelize');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const auth = require('../helpers/auth');
const verify = auth.verifyToken;

const Op =sequelize.Op;

router.get('/', verify, async (req, res, next) => {
    try {
        const userName = req.query.char;
        const myId = req._userId;
        
        models.Users.findAll({ 
            attributes: ['id', 'name'],
            where: { name: {[Op.iLike]: `${userName}` + '%'}}, raw:true, 
            include: {
                attributes: ['id'],
                model: models.Followers,
                targetKey: { 'follower': myId}, raw:true
            },
        })
            .then(users => {
                console.log('uuuuuuuusers', users)
                res.status(200).send({
                message: 'success',
                result: true,
                users
                }); 
            })
        // const users = await sequelize.query(`SELECT users.id, name, followers.id AS followerID
        //                        FROM users LEFT JOIN followers ON follower = :following_id AND following = users.id
        //                        WHERE users.name ILIKE :search_name AND NOT users.id = :following_id`,
        //                      { replacements: { search_name: (`${userName}` + '%'), following_id: `${myId}`  }, type: sequelize.QueryTypes.SELECT })
        //                      console.log('uuuuuuuusers', users)
        // res.status(200).send({
        //         message: 'success',
        //         result: true,
        //         users
        //         });          
    }
    catch(err) {
        next(new Error(err.message));
    }
});

module.exports = router;