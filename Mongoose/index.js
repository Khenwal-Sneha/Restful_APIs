const mongoose = require("mongoose");
// const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const cors = require('cors');
const methodOverride = require('method-override');
const Chat=require("./models/chat");
const path=require("path");

app.use(cors());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

//Index Route to show all chats
app.get('/chats',async (req,res)=>{
   let chats= await Chat.find();
   res.render("index.ejs",{chats});
})

//Route to give form to send new message
app.get('/chat/new',(req,res)=>{
    res.render("new.ejs");
})

//Route to save new message to database
app.post('/chats',async (req,res)=>{
     const {from,to,msg}= await req.body;
     let chat= await new Chat({
        from:from,
        to:to,
        message:msg,
        created_at: new Date()
    });
     await chat.save().then(()=>console.log("Saved in Db"));
    let chats= await Chat.find();
    res.render("index.ejs",{chats});
});

//Route to give form to edit message
app.get('/chat/:id',async (req,res)=>{
     let {id}= await req.params;
     let thisChat= await Chat.findOne({_id:`${id}`});
     res.render("edit.ejs",{thisChat});
});

//Route to save updated message
app.patch('/chats/:id',async (req,res)=>{
    let {msg}=await req.body;
    let {id}=await req.params;
    await Chat.updateOne({_id:`${id}`},{$set:{message:msg,created_at:new Date()}});
    let chats=await Chat.find();
    res.render("index.ejs",{chats})
});

// Route to take you to delete route 
app.delete('/chats/:id',async (req,res)=>{
    let {id}= await req.params;
    await Chat.deleteOne({_id:id});
    let chats=await Chat.find();
    res.render("index.ejs",{chats});
});

















//Creating Server
app.listen("8080",()=>{
    console.log("App running...");
})

//Connecting to Database
async function main(){
    await mongoose.connect("mongodb://localhost:27017/whatsapp");
}
main().then(()=>console.log("connected successfully")).catch((err)=>console.log(err));
