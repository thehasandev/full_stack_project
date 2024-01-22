const Model = require("../model/model")

async function registrarionControlar(req,res){
    const {userName,userEmail,userPassword} = req.body
   
    const exjectionUser = await Model.find({userEmail:userEmail})
 
    if(exjectionUser.length>0){
     res.send({"errorEmail":"This email is already used"})
    }else{
        const data = new Model({
        userName:userName,
        userEmail:userEmail,
        userPassword:userPassword
    })
    data.save()
    res.send({"sucess":"ragestration sucess"})
    }
}

module.exports = {registrarionControlar}