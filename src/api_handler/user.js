
function get_user(config) {

    var url = new URL(`${config.device_ip}:${config.port}/api/user`)

    return fetch(url,
        {
            credentials: 'include',
        })   
        .then(response => response.json())

}

module.exports.get_user = get_user

