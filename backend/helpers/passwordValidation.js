const passwordValidation =(password)=>{
    const pattern =   /^.{6,16}$/
     if(!pattern.test(password)){
        return(true)
     }
}

module.exports = passwordValidation