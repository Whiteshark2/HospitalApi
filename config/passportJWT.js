const passport=require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;

const Doctor=require('../models/doctor')

const opts = {
jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
secretOrKey :'hospital'
}

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    Doctor.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
           
        }
    });
}));

module.exports=passport