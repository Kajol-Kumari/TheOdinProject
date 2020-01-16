var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenreInstanceSchema= new Schema(
    {
        name:{type:String ,required:true, min:2, max:100},
    }
);

GenreInstanceSchema.virtual('url').get(function(){
    return '/catalog/genreinstance/' + this._id;
});


//Exporting model
module.exports= mongoose.model('genreInstance', GenreInstanceSchema);
