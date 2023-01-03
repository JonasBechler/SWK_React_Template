module.exports = function(config){
    function connect_accounts() {

        var url = new URL(`${config.device_ip}:${config.port}/api/connect_accounts`)

        location.href = `${config.device_ip}:${config.port}/api/connect_accounts`
        
        
    }
    return connect_accounts;
}

