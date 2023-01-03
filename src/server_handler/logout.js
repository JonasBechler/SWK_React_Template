module.exports = function(config){
    function logout() {

        location.href = `${config.device_ip}:${config.port}/api/logout`
        
    }

    return logout;
}



