
function login_with_credentials(config, email, password) {

    // do a post?
    var url = new URL(`${config.device_ip}:${config.port}/api/login`)
    var params = {email: email, password: password}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    return fetch(url,
    {
        credentials: 'include',
        method: "POST",
    })    
}

function login_with_konstanz(config) {

    // cant do post because of redirect
    location.href = `${config.device_ip}:${config.port}/api/login_kn`
       
}

module.exports.with_credentials = login_with_credentials
module.exports.with_konstanz = login_with_konstanz

