var express = require('express');
var router = express.Router();
const md5 = require('blueimp-md5');
const UserModel = require('../models/UserModel');
const RoleModel = require('../models/RoleModel');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: `Inupedia's Backend Server`});
});

/* User Login Route*/
router.post('/login', function (req, res) {
    const {username, password} = req.body
    UserModel.findOne({username, password: md5(password)})
        .then(user => {
            if (user) {
                res.cookie('userid', user._id)
                const {create_time, password, ...responseData} = user._doc // response without password & create time
                res.send({status: 0, data: responseData})
            } else {
                res.send({status: 1, msg: 'incorrect username or password'})
            }
        })
        .catch(error => {
            console.log('Login Error', error)
            res.send({status: 1, msg: 'Error with login'})
        })
})

/* User Add Route*/
router.post('/manage/user/add', function (req, res) {
    const {username, password} = req.body
    UserModel.findOne({username})
        .then(user => {
            if (user) {
                res.send({status: 1, msg: 'user exsit'})
                return new Promise(() => {
                })
            } else {
                return UserModel.create({...req.body, password: md5(password || 'password')})
            }
        })
        .then(user => {
            res.send({status: 0, data: user})
        })
        .catch(error => {
            console.log('Add Error', error)
            res.send({status: 1, msg: 'Error with adding new user'})
        })
})
/* get users info */
router.get('/manage/user/list', function (req, res) {
    UserModel.find({username: {'$ne': 'admin'}})
        .then(users => {
            RoleModel.find().then(roles => {
                res.send({status: 0, data: {users, roles}})
            })
        })
        .catch(error => {
            console.error('Error', error)
            res.send({status: 1, msg: 'Please retry'})
        })
})

/* User Modify Route*/
/* User Delete Route*/

module.exports = router;
