

module.exports = function(config){
    const login = require('./login')(config);
    const logout = require('./logout')(config);
    const register = require('./register')(config);
    const user = require('./user')(config);
    const connect_accounts = require('./connect_accounts')(config);
    



    return {
        login: login,
        logout: logout,
        register: register,
        user: user,
        connect: connect_accounts
    }
}