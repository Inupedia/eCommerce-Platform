var express = require('express');
var router = express.Router();
const md5 = require('blueimp-md5');
const UserModel = require('../models/UserModel');
const RoleModel = require('../models/RoleModel');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* User Login Route*/
router.post('/login', function (req, res) {
    const {username, password} = req.body
    UserModel.findOne({username, password: md5(password)})
        .then(user => {
            if (user) {
                res.cookie('userid', user._id)
                res.send({status: 0, msg: 'log in success'})
            } else {
                res.send({status: 1, msg: 'Incorrect username or password'})
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
/* User Modify Route*/
/* User Delete Route*/

module.exports = router;
