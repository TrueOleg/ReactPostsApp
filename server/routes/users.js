const express = require('express');
const router = express.Router();

const { sequelize } = require('../models/sequelize');
const models = require('../models/sequelize');
const auth = require('../helpers/auth');

const verify = auth.verifyToken;
const Op =sequelize.Op;

router.get('/search', verify, async (req, res, next) => {
    try {
        const userName = req.query.char;
        const myId = req._userId;
        
        const users = await models.Users.findAll({ 
            attributes: ['id', 'name'],
            where: { name: {[Op.iLike]: `${userName}` + '%'}}, raw:true, 
            include: {
                attributes: ['id'],
                model: models.Followers,
                targetKey: { 'follower': myId}, raw:true
            }
        });   
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