const express = require('express');
const router = express.Router();

const auth = require(__dirname+'/auth');
const posts = require(__dirname+'/posts');
const followers = require(__dirname+'/followers');
const users = require(__dirname+'/users');

router.use('/', auth)
router.use('/api/posts', posts)
router.use('/api/followers', followers)
router.use('/api/users', users)

module.exports = router;