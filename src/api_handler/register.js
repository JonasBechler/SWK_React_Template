
function register_with_data(config, data) {

    var url = new URL(`${config.device_ip}:${config.port}/api/register`)
    var params = data
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    return fetch(url,
        {
            credentials: 'include',
            method: "POST",
        })   
}

module.exports.with_data = register_with_data

