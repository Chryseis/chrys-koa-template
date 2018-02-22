const http = require('http');
const https = require('https');
const querystring = require('querystring');


const METHOD = {
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    GET: 'GET'
}

const fetchApi = async ({
                            hostname, port, path, method = METHOD.GET, data, headers = {
        'content-type': 'application/json'
    }, isHttps = true
                            , callback
                        }) => {
    console.log(data);
    let fetch = isHttps ? https : http;
    method = method.toUpperCase();
    data = headers['content-type'] === 'application/x-www-form-urlencoded' ? querystring.stringify(data) : JSON.stringify(data);
    headers = method === METHOD.POST ? Object.assign({}, headers, {'Content-Length': Buffer.byteLength(data)}) : headers;
    path = method === METHOD.GET ? `${path}?${querystring.stringify(data)}` : path;
    return await new Promise((resolve, reject) => {
        let rawData = '';
        const req = fetch.request({
            hostname,
            port,
            path,
            method,
            headers
        }, (res) => {
            res.setEncoding('utf8');
            res.on('data', chunk => rawData += chunk);
            res.on('end', () => {
                try {
                    callback && callback(rawData, 'true')
                    console.log(JSON.parse(rawData));
                    resolve(JSON.parse(rawData))
                } catch (err) {
                    throw err
                }
            })
        });

        req.on('error', (e) => {
            callback && callback(`problem with request: ${e.message}`, 'false');
            console.error(`problem with request: ${e.message}`);
        });


        method === METHOD.POST && req.write(data);
        req.end();
    })
}

module.exports = {
    fetchApi
}