const express = require("express");
const app=express();
app.use(express.json());
const Data=[
    {
        "id":1,
        "name":"John"
    },
    {
        "id":2,
        "name":"Jane"
    },
    {
        "id":3,
        "name":"jack"
    }
];
app.get("/",(req,res)=>{
    res.send("<h1>Hello This is main page</h1>")
})
app.get("/data",(req,res)=>{
    res.json(Data);
})
app.get("/data/:id",(req,res)=>{
    res.json(Data[req.params.id]);

})
app.post("/add",(req,res)=>{
    const {id,name}=req.body;
    console.log(id,name);;
    res.send("<h1>Data added</h1>");
})
app.listen(5000);     