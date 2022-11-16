
function logout(config) {

    location.href = `${config.device_ip}:${config.port}/api/logout`
    
}

module.exports.logout = logout

