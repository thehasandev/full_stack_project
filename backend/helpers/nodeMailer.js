const nodemailer = require("nodemailer");

async function nodemailser (email){
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
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `<a style="width:70px" href="https://imgbb.com/"><img src="https://i.ibb.co/QbtK82v/images.png" alt="images"></a><h1>Hello Hasan</h1><a style="margin-right:15px" href="https://imgbb.com/"><img style="width:50px" src="https://i.ibb.co/GR55R6L/images-1.png" alt="images-1"></a><a style="margin-right:15px" href="https://imgbb.com/"><img style="width:50px" src="https://i.ibb.co/GR55R6L/images-1.png" alt="images-1"></a><a style="margin-right:15px" href="https://imgbb.com/"><img style="width:50px" src="https://i.ibb.co/GR55R6L/images-1.png" alt="images-1"></a><a style="margin-right:15px" href="https://imgbb.com/"><img style="width:50px" src="https://i.ibb.co/GR55R6L/images-1.png" alt="images-1"></a><a style="margin-right:15px" href="https://imgbb.com/"><img style="width:50px" src="https://i.ibb.co/GR55R6L/images-1.png" alt="images-1"></a><p>Welcome to my E-commerce website</p>`, // html body
      });
}

module.exports = {nodemailser}