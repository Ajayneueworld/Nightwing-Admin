import dbConnect from "../../../utils/mongodb";
import NFT from "../../../models/nfts";

export default async function handler(req,res){

    await dbConnect()
    const {method} = req

    switch(method){
        case 'PUT' : 
            try{
                let stats = await NFT.create(req.body)

                if(!stats){
                    res.status(400).json({success : false})
                }

                res.status(200).json({success : true, data : stats})

            }
            catch(err){
                res.status(400).json({success : false})
            }
    }
}