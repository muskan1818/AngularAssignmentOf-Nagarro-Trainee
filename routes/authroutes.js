const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
//access local storage
var LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

router.get("/logout", (req, res) =>
{
    localStorage.clear();
    res.redirect('/');
})

router.get("/", (req, res) => {
    var role = localStorage.getItem('role');
    if(role == 'student'){
        res.redirect('/student/searchresult')
    } else if (role == 'teacher'){
        res.redirect('/teacher/studentlist')
    } else{
        res.render('index');
    }   
})

router.get("/role", (req, res) =>
{
    res.json(localStorage.getItem('role'));
})
router.post("/",(req, res) =>
{
    localStorage.setItem('role',req.body.role);
    if(req.body.role=="teacher")
    {
        res.redirect("/teacher/studentlist")
    }
    else if(req.body.role=="student")
    {
        res.redirect("/student/searchresult")
    }
})

module.exports = router
