const express = require("express");

const fs = require("fs");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/write",function(req,res){
    const message = req.body.message;
    fs.writeFile("text.txt",message,function(err){
        if(err)
        {
            console.log(err);
            return res.status(500).send("Error writing file");
        }
        res.send("File Written");
    });
});

app.get("/read",function(req,res){
    fs.readFile("text.txt","utf-8",function(err,data){
        if(err)
        {
            console.log(err);
            return res.status(500).send("Error reading file");
        }
        console.log(data);
        res.send(data);
    });
});

    app.listen(8000);

