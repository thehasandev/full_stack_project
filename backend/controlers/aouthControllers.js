const Model = require("../model/model")
const bcrypt = require('bcrypt');
const { nodemailser } = require("../helpers/nodemailer");
const emailValidation = require("../helpers/emailValidation");
const passwordValidation = require("../helpers/passwordValidation");

async function registrarionControlar(req, res) {
    const { userName, userEmail, userPassword } = req.body
    const exjectionUser = await Model.find({ userEmail: userEmail })

    if (exjectionUser.length > 0) {
        res.send({ "errorEmail": "This email is already used" })
    } else {

        if (emailValidation(userEmail)) {
            return res.send({ emailvalid: "Please Enter valid Email" })
        } else if (passwordValidation(userPassword)) {
            return res.send({ passvalidation: "Password must be at 1 to 6" })
        }

        bcrypt.hash(userPassword, 10, function (err, hash) {
            const data = new Model({
                userName: userName,
                userEmail: userEmail,
                userPassword: hash
            })
            nodemailser(data.userEmail)
            res.send({ "sucess": "ragestration sucess" })
            data.save()
        });

    }

}



module.exports = { registrarionControlar }