const express = require('express');
const router = express.Router();
const DbOperations=require("../database/DbOperation");
var LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

router.post("/clicked", (req, res) => {
   
    
})
router.get("/studentlist", (req, res) => {
    if(localStorage.getItem('role')=='teacher')
    {
        DbOperations.studentList(res);
    }
    else
    {
        DbOperations.studentList(res);
    }
})
router.get("/edit/:rollNo", (req, res) =>
{
    const rollNo = req.params.rollNo
    const post= req.body
    DbOperations.editView(rollNo,post,res);
})
router.post("/edit/:rollNo", (req, res) => { 
    const post= req.body
    const rollNo = req.body.rollNo
    DbOperations.updateStudent(rollNo,post,res);
})
router.get("/studentdetails", (req, res) => {
    if(localStorage.getItem('role')=='teacher')
    {
        res.render('studentDetails')
    }
    else
    {
        res.status(400).render('ErrorFile');
    }
})
router.post("/studentdetails", (req, res) =>
  {
      const studentData = req.body
      DbOperations.createStudent(studentData, res);
  })
router.delete("/delete/:rollNo", (req, res) =>
{
    const rollNo = req.params.rollNo
    DbOperations.deleteStudent(rollNo,res);
})

module.exports = router