import dbconnect from '../../utils/mongodb'
import mongoose from "mongoose";
import Form from "../../models/form"
export default async function handler(req, res) {

  await dbconnect()

  const {method} = req
  console.log(Form)

  switch(method){
    
    case 'GET' :
      try{
      let stats = await Form.find({})
      if(stats){
        res.status(200).json({ success : true, data : stats })
      }else{
        res.status(400).json({success : false})
      }
    }catch(err){
        res.status(400).json({success : false})
    }
      break;
    
  }
}
