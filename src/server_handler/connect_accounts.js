module.exports = function(config){
    function connect_accounts() {

        var url = new URL(`${config.device_ip}:${config.port}/api/connect`)

        location.href = `${config.device_ip}:${config.port}/kn/connect`
        
        
    }
    return connect_accounts;
}

