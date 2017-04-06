var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = {name: {type: String}, password: {type: String}};
var blog = {username: {type: String},blog_title: {type: String}, blog_content: {type: String}};
// global.db = mongoose.connect("mongodb://localhost:27017/mynode");
// global.db = mongoose.connect('mongodb://username:password@host:port/database?options...');
global.db = mongoose.connect('mongodb://remotedb:remotedb@ds141450.mlab.com:41450/db_std');

mongoose.model('user', new Schema(user))
mongoose.model('blog', new Schema(blog))
module.exports = {
    getModel: function (type) {
        return mongoose.model(type);
    }
};
var _getModel = function (type) {
    return mongoose.model(type);
};