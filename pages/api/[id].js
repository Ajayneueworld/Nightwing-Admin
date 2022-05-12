import dbConnect from "../../utils/mongodb";
import Form from "../../models/form";

export default async function handler(req,res){

    await dbConnect()

    const {method,
        query : {id}
    } = req

    switch(method){
        case 'DELETE':
            try{
                let stats = await Form.findByIdAndDelete(id)
                if(!stats){
                    res.status(400).json({success : false})
                }
                res.status(200).json({success : true})
            }catch(err){
                res.status(400).json({success : false})

            }
            break;
    }
}