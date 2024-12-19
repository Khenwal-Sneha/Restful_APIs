const mongoose=require("mongoose");
const Chat=require("./models/chat");

//Connecting to Database
async function main(){
    await mongoose.connect("mongodb://localhost:27017/whatsapp");
}
main().then(()=>console.log("connected successfully")).catch((err)=>console.log(err));

const allchats=[
    {
        from:"Neha",
        to:"Rahul",
        message:"Hii",
        created_at: new Date()
    },
    {
        from:"Rahul",
        to:"Neha",
        message:"How are you",
        created_at: new Date()
    },
    {
        from:"Sachin",
        to:"Sayali",
        message:"Hi Genda Gulab",
        created_at: new Date()
    },
    {
        from:"Rana",
        to:"Vaiju",
        message:"I am with you",
        created_at: new Date()
    },
    {
        from:"Abhira",
        to:"Armaan",
        message:"I dont trust you",
        created_at: new Date()
    },
    {
        from:"Ruhi",
        to:"Rohit",
        message:"Why you left me?",
        created_at: new Date()
    },
    {
        from:"Jaya",
        to:"Rana",
        message:"Marry my sister",
        created_at: new Date()
    }
]

Chat.insertMany(allchats);