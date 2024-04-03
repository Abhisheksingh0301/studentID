var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studmst = new Schema({
    student_id:String,
    sess:String,
    current_year:Number,
    name:String,
    sex:String, 
    department:String,  
    class:String,
    roll:Number,
    registrationno:String,
    campus_id:String,
});

module.exports = mongoose.model('student_master', studmst);