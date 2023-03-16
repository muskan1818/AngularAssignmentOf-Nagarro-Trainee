const mysql= require('mysql')

const DB=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'Result',
    port:3306,
    insecureAuth : true
})
 
DB.connect((err)=>{
    if(!err){
        console.log("connected to DB")
        DB.query(`SELECT 1 FROM result`,(err,result)=>{
            if(err){
                console.log("table creating")
                DB.query(`CREATE TABLE result(
                    rollNo INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                    name VARCHAR(100) NOT NULL,
                    dob DATE NOT NULL,
                    score INT NOT NULL)`
                )
                console.log("table created")
            }
            else{
                console.log("table already exist")
            }
        })
    }
    else{
        console.log("failed to connect")
    }
})

module.exports=DB