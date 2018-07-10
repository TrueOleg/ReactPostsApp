const express = require('express');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const sequelize = require('../models/sequelize');
const auth = require('../helpers/auth');
const router = express.Router();
const verify = auth.verifyToken;

router.post('/', verify, async (req, res, next) => {
    try {
        const {title, content} = req.body;
        const userId = req._userId;
        await sequelize.query(`INSERT INTO posts (user_id, title, content) 
                                        VALUES (\'${userId}\', \'${title}\', \'${content}\')`,
                                        { type: sequelize.QueryTypes.INSERT})
        res.status(200).send({
            message: 'success',
            result: true,
        });
    } 
    catch(err) {
        // const error = new Error(err.message);
        // error.status = 400;
        next(new Error(err.message));
    }    
}); 

router.get('/friends', verify, async (req, res, next) => {
    try {        
        const userId = req._userId;
        const posts = await sequelize.query('SELECT title, content, name, date FROM posts INNER JOIN users ON posts.user_id=users.id WHERE user_id IN (SELECT following FROM followers WHERE follower=?)', {replacements: [`${userId}`], type: sequelize.QueryTypes.SELECT})
        res.status(200).send({
            message: 'success',
            result: true,
            posts
        });
    } 
    catch(err) {
        next(new Error(err.message));
    }      
}); 

router.get('/my', verify, async (req, res, next) => {
    try {        
        const userId = req._userId;
        const posts = await sequelize.query('SELECT title, content, date FROM posts  WHERE user_id=?', {replacements: [`${userId}`], type: sequelize.QueryTypes.SELECT})
        req.method="NONE"; 
        res.status(200).send({
            message: 'success',
            result: true,
            posts
        });
    } 
    catch(err) {
        next(new Error(err.message));
    }      
}); 

module.exports = router;