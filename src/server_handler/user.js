module.exports = function(config){
    function user() {

        var url = new URL(`${config.device_ip}:${config.port}/user`)

        return fetch(url,
            {
                credentials: 'include',
            })   
            .then(response => response.json())

    }
    return user;
}


