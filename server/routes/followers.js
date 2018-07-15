const express = require('express');
const router = express.Router();
const sequelize = require('../models/sequelize');
const models = require('../models/sequelize');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const auth = require('../helpers/auth');
const verify = auth.verifyToken;

router.post('/', verify, async (req, res, next) => {
    try {
        // const data = req.body;
        const followingId = req.query.id;
        const userId = req._userId;
        const follower = await models.Followers.build({ follower: userId, following: followingId})
                                                .save();
        res.status(200).send({
            message: 'success',
            result: true,
        })                                         
        // await sequelize.query(`INSERT INTO followers (follower, following) VALUES (:follower, :following)`,
        // {replacements: {follower: `${userId}`, following: `${followingId}`}, type: sequelize.QueryTypes.INSERT})
        // res.status(200).send({
        //     message: 'success',
        //     result: true,
        // }) 
    }
    catch(err) {
        next(new Error(err.message));
    }
});

router.delete('/', verify, async (req, res, next) => {
    try {
        // const data = req.body;
        const followingId = req.query.id;
        const userId = req._userId;
        const follower = await models.Followers.destroy({where: {follower: userId, following: followingId}})
        await res.status(200).send({
              message: 'delete',
              result: true,
        })
        // await sequelize.query(`DELETE FROM followers WHERE following=:following AND follower=:follower`, 
        // {replacements: {following: `${followingId}`, follower: `${userId}`}, type: sequelize.QueryTypes.DELETE})
        // await res.status(200).send({
        //       message: 'success',
        //       result: true,
        // })
    }
    catch(err) {
        next(new Error(err.message));
    }
});



module.exports = router;