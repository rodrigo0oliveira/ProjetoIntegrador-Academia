const aiService = require("../services/geminiService")

exports.sendRequestToAI = async(req,res)=>{
    try{
        const message = req.body.message;
        console.log(message);
        const response = await aiService.sendRequestToAI(message);
        res.status(200).json({message:response});
    }catch(erro){
        res.status(500).json({erro:erro.message})
    }
}