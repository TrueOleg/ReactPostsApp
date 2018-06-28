const express = require('express');
const router = express.Router();
const jwt = require('../helpers/auth')
const sequelize = require('../models/sequelize');
const crypto = require('crypto');
const config = require('../config/config');
const {secret} = config.jwt
const auth = require('jsonwebtoken');


router.post('/api/singin', async (req, res, next) => {
    try {
    const reqData = req.body;
    const login = reqData.login;
    const user = await sequelize.query(`SELECT * FROM users WHERE name=?`, {replacements: [`${login}`], type: sequelize.QueryTypes.SELECT})
    const token = await crypto.createHash('md5').update(reqData.password).digest("hex") === user[0].password
    ? jwt.signToken(user[0].id)
    : null;
    if (token) {
        await res.status(200).send({
        message: 'success',
        result: true,
        token 
        });
    } else {
        await res.status(200).send({
        message: 'Incorrect password',
        result: false
        });
    }   
    }
    catch (err) {
        next(new Error(err.message));
    };
});

router.post('/api/singup', async (req, res, next) => {
    try {
    let {regLogin, regEmail, regPass} = req.body;
    regPass = crypto.createHash('md5').update(regPass).digest("hex");
    const row = await sequelize.query(`SELECT * FROM users WHERE name=?`, {replacements: [`${regLogin}`], type: sequelize.QueryTypes.SELECT})
    if (row.length !== 0) {
        await res.status(200).send({
            message: 'This login already exists',
            result: false
        })
    } else {
        sequelize.query(`INSERT INTO users (name, email, password) VALUES (:login, :email, :pass)`,
        {replacements: {login: `${regLogin}`, email: `${regEmail}`, pass: `${regPass}`}, type: sequelize.QueryTypes.INSERT});
        await res.status(200).send({
            message: 'success',
            result: true,
        });
    }
    } 
    catch(err) {
        next(new Error(err.message));
    }
});

router.get('/api/auth', (req, res, next) => {
    auth.verify(req.headers.authorization, secret, function(err, decoded){
        if(err) throw err
          return res.status(200).send({
                 message: 'success',
                 result: true,        
        }); 
      }); 
})


router.get('/', async (req, res, next) => {
    try {   
    res.sendFile(process.cwd()+'/public/index/index.html')
    }
    catch(err) {
    next(new Error(err.message));
    }
});

router.get('/singin', async (req, res, next) => {
    try {
    res.sendFile(process.cwd()+'/public/login/login.html')
    }
    catch(err) {
    next(new Error(err.message));
    }
});

router.get('/home', async (req, res, next) => {
    try {
    res.sendFile(process.cwd()+'/public/home/home.html')
    }
    catch(err) {
    next(new Error(err.message));
    }
})

router.get('/singup', async (req, res, next) => {
    try {
    res.sendFile(process.cwd()+'/public/registration/registration.html')
    }
    catch(err) {
    next(new Error(err.message));
    }
});





    

module.exports = router;