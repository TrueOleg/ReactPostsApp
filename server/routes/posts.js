const express = require('express');
const router = express.Router();
const { sequelize } = require('../models/sequelize');

const models = require('../models/sequelize');
const auth = require('../helpers/auth');
const verify = auth.verifyToken;
const Op = sequelize.Op;

router.post('/', verify, async (req, res, next) => {
    try {
        const {title, content} = req.body;
        const userId = req._userId;
        models.Posts
                .build({ user_id: userId, title: title, content: content })
                .save()
                .then( () => {
                    res.status(200).send({
                        message: 'success',
                        result: true,
                    });
                })
    } 
    catch(err) {
        next(new Error(err.message));
    }    
}); 

router.get('/friends', verify, async (req, res, next) => {
    try {        
        const userId = req._userId;
        models.Followers.findAll({attributes: ['following'], where: {follower: userId}, raw: true})
                                                            .then(res => {
                                                                console.log('res', res);
                                                                var following = res.map((item) => {
                                                                    for(var following in item) {
                                                                        return item[following]
                                                                    }
                                                                });
                                                                return following;
                                                                
                                                            }) 
        // models.Posts.findAll({
        //     attributes: ['title', 'content', 'date'],
        //     include: {
        //         as: 'message',    
        //         model: models.Users,
        //         attributes: ['name']
        //     },
        //     where: { user_id: {[Op.between]: models.Followers.findAll({attributes: ['following'], where: {follower: userId}, raw: true})
        //                                                     .then(res => {
        //                                                         var following = res.map((item) => {
        //                                                             for(var following in item) {
        //                                                                 return item[following]
        //                                                             }
        //                                                         });
        //                                                         return following;
                                                                
        //                                                     }) 
        //                         }
        //     }, raw: true
            .then(following => {
                console.log('following', following);
                models.Posts.findAll({
                                attributes: ['title', 'content', 'date'],
                                include: {   
                                    model: models.Users,
                                    attributes: ['name']
                                },
                                where: { user_id: {[Op.in]: following}}, raw: true 
                            })
                            .then(posts => {
                                console.log('posts', posts)
                                res.status(200).send({
                                    message: 'success',
                                    result: true,
                                    posts
                                });
                            })                    
            // models.Followers.findAll({attributes: ['following'], where: {follower: userId}, raw: true})
            // .then(res => {
            //     var following = res.map((item) => {
            //         for(var following in item) {
            //             return item[following]
            //         }
            //     });
            //     return following;
                
            // })
            // .then(following => {
            //     console.log('following', following)
            // })
                // console.log('posts', posts)
            // })
        // const posts = await sequelize.query('SELECT title, content, name, date FROM posts INNER JOIN users ON posts.user_id=users.id WHERE user_id IN (SELECT following FROM followers WHERE follower=?)', {replacements: [`${userId}`], type: sequelize.QueryTypes.SELECT})
        // res.status(200).send({
        //     message: 'success',
        //     result: true,
        //     posts
        // });
            })
    } 
    catch(err) {
        next(new Error(err.message));
    }      
}); 

router.get('/my', verify, async (req, res, next) => {
    try {        
        const userId = req._userId;
        const posts = await models.Posts.findAll({ attributes: ['title', 'content', 'date'], where: { user_id: userId }, raw: true})
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