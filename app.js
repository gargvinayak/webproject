const express = require ("express")

const app = express();
const port =80;

const mongoose = require('mongoose');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/vinayak');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const kittySchema = new mongoose.Schema({
    name: String
  });
  const Kitten = mongoose.model('kitten', kittySchema);

  const harrykitty = new Kitten({ name: 'Silence' });
// console.log(harrykitty.name);
 harrykitty.save();
 async function getUser() {
    
    const foundUser = await Kitten.find();
  
    console.log(foundUser); // Prints '{name: 'bill', admin: false}'
    
  }
//  const kittens =  await Kitten.findOne();

 getUser()
app.get("/",(req,res)=>{
    res.send("This is my first express website")
});
app.get("/about",(req,res)=>{
    res.send("This is about page of website")
});
app.get("/contact",(req,res)=>{
    res.send("This is contact page website")
});


app.listen(port,()=>{
    console.log("server started")
})