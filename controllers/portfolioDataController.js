const A=require('../middlewares/resolveandcatch');
const dataTable=require('../models/portfolioData');
const twilio = require('twilio');
const dotEnv=require("dotenv")

dotEnv.config()

const client = twilio(process.env.ACCOUNTSID, process.env.AUTHTOKEN);

const portfolioDataController={
    addData:A(async(req,res)=>{
        const{name,email,subject,message,phone_number}=req.body;
        try{
            client.messages
            .create({
                body: `New Form Submission:\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}\nPhone Number: ${phone_number}`,
                from: process.env.TWILLIO_PHONE_NUMBER,
                to: '+919381009089', // Replace with the admin's phone number
            })
            .then((message) => console.log(message.sid));
  
            const data = new dataTable({ name, email,subject, message,phone_number });
            const savedData = await data.save();
            res.status(201).json({ message: 'Submitted successfully', data: savedData });
        }catch(error){
            console.log(error);
        }
    })
};
module.exports = portfolioDataController;