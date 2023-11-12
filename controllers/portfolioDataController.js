const A=require('../middlewares/resolveandcatch')
const dataTable=require('../models/portfolioData')

const portfolioDataController={
    addData:A(async(req,res)=>{
        const{name,email,subject,message,phone_number}=req.body;
        try{
            const data = new dataTable({ name, email,subject, message,phone_number });
            const savedData = await data.save();
            res.status(201).json({ message: 'Book created successfully', data: savedData });
        }catch(error){
            console.log(error);
        }
    })
};
module.exports = portfolioDataController;