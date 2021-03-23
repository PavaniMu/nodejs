var express=require("express");
var app=express();

app.use(express.json())

let logins=[
    {
        username:'Pavani',
        password:'abcd@xyz'
    }

]
app.use(express.urlencoded({extended:false}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.get('/users',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(logins);
});
app.post("/submit-data",function(req,res){
    res.send(req.body.username+" Is the username" + req.body.password+" is the password");
})

var server=app.listen(4000,function(){
    console.log('Server is running')
})