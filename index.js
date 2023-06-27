const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser")
require('dotenv').config();
const PORT = process.env.PORT || 3000 ;
mongoose.set('strictQuery',false);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}
const contactSchema = new mongoose.Schema({
    name: String,
    age: String,
    address: String,
    more: String
  });

  const Contact = mongoose.model('Contact', contactSchema);



app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view-engine','pug')
app.set('views', path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    const con ='this is content using pug'
    const params = {'title':'pug template', 'content':con}
res.status(200).render('index.pug',params)
})

app.post("/",(req,res)=>{
    
    var myData = new Contact(req.body);
    myData.save()
    res.status(200).render('index.pug')
    })

// app.post("/",(req,res)=>{
// const form = (req.body)
// console.log(req.body.age) // here we should use name in input tag
// const params ={'message ': 'Your form has been submitted successfully'}
// res.status(200).render('index.pug',params)
// })

app.listen(PORT,()=>{
    console.log("pug server started")
})