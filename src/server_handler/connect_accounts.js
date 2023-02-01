module.exports = function(config){
    function connect_accounts() {

        window.location.href = `${config.device_ip}:${config.port}/kn/connect`
        
    }
    return connect_accounts;
}

