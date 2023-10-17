const adminData = require("../Model/adminModel")
const LocalStrategy = require('passport-local').Strategy

const getAdminById = async (id) => {
    return await adminData.findOne({userId:id})
}


const initializePassport = (passport) => {
 

    const authenticateUser = async (userId,password,done) => {
              const admin = await adminData.findOne({userId:userId})
              
             console.log(await adminData.find())
              
              if(admin == null){
                   return done(null,false,{message:"user id doesn't exist"})
              }
              if(admin.password === password){
                return done(null,admin)
              }
              else{
                return done(null,false,{message:"password is incorrect"})
              }
    }
         
    passport.use(new LocalStrategy({usernameField:'userId'},authenticateUser))
    passport.serializeUser((admin,done) => done(null,admin.userId))
    passport.deserializeUser((id,done) => {return done(null,getAdminById(id))})

    
}
module.exports = initializePassport