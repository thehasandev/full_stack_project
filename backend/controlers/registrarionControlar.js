const Model = require("../model/model")
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");

async function registrarionControlar(req,res){
    const {userName,userEmail,userPassword} = req.body
    const exjectionUser = await Model.find({userEmail:userEmail})
 
    if(exjectionUser.length>0){
     res.send({"errorEmail":"This email is already used"})
    }else{
        bcrypt.hash(userPassword, 10, async function(err, hash) {
            const data = new Model({
                userName:userName,
                userEmail:userEmail,
                userPassword:hash
                 })
            data.save()
            res.send({"sucess":"ragestration sucess"})

            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                  user: "thehasandev@gmail.com",
                  pass: "qrik tyfi wzhi pyqo",
                },
              });

              const info = await transporter.sendMail({
                from: 'thehasandev@gmail.com', // sender address
                to: "hasan325502@gmail.com", // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>", // html body
              });

        });
    }
}

module.exports = {registrarionControlar}