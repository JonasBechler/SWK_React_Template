module.exports = function(config){
    function logout() {

        window.location.href = `${config.device_ip}:${config.port}/logout`
        
    }

    return logout;
}



