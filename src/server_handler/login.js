module.exports = function(config){
    function login_with_credentials(email, password) {

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

    function login_with_konstanz() {

        // can't do post because of redirect
        location.href = `${config.device_ip}:${config.port}/kn/login`
        
    }
    
    return {
        with_credentials: login_with_credentials,
        with_konstanz: login_with_konstanz
    }
}
