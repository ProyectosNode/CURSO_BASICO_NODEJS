const users = require('../resources15/users.json');

module.exports = {
    getUsers: function() {
        return users;
    },
    getUserById: function(id){
        return users.filter(user=>user._id===id);
    }
}