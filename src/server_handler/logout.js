module.exports = function(config){
    function logout() {

        location.href = `${config.device_ip}:${config.port}/logout`
        
    }

    return logout;
}



