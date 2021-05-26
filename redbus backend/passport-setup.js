const passport=require("passport")

const GoogleStrategy= require("passport-google-oauth20").Strategy

passport.serializeUser(function(user,done){
    done(null,user.id)
})

passport.deserializeUser(function(id,done){
    user.findById(id,function(err,user){
        done(err,user)
    })
})

passport.use(new GoogleStrategy({
    clientID:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    callbackURL:"http://localhost/google/callback"
},
function(accessToken,refreshToken,profile,done){
    user.findOrCreate({googleId: profile.id}, function(err,user){
        return done(err,user)
    })
}))