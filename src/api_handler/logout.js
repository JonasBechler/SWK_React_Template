
function logout(config) {

    location.href = `${config.device_ip}:${config.konrad_port}/api/logout`
    
}

module.exports.logout = logout

