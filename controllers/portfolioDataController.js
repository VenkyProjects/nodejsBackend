const A=require('../middlewares/resolveandcatch');
const dataTable=require('../models/portfolioData');
const twilio = require('twilio');

const accountSid = "ACbe1b2118bbdf19d19c7b20ffae0c5e03";
const authToken = "516f086038866f41182e3d897989c3f6";
const client = twilio(accountSid, authToken);

const portfolioDataController={
    addData:A(async(req,res)=>{
        const{name,email,subject,message,phone_number}=req.body;
        try{
            client.messages
            .create({
                body: `New Form Submission:\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}\nPhone Number: ${phone_number}`,
                from: '+19382223623',
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