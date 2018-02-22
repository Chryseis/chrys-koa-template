/**
 * Created by Administrator on 2017/11/9.
 */
import fetch from 'isomorphic-fetch';
import HttpMethod from '../../constants/httpMethod';
import querystring from 'querystring'

export default function request(url, options = {}) {
    options = {
        // your default options
        mode: 'cors',
        credentials: 'same-origin',
        redirect: 'error',
        ...options
    };

    if (options.queryParams) {
        url += (url.indexOf('?') === -1 ? '?' : '&') + querystring.stringify(options.queryParams);
        delete options.queryParams;
    }

    if (options.method !== HttpMethod.GET) {
        if (options.contentType.indexOf('application/json') > -1) {
            options.body = JSON.stringify(options.body);
        } else if (options.contentType.indexOf('application/x-www-form-urlencoded') > -1) {
            options.body = querystring.stringify(options.body)
        }
    }

    return fetch(url, options);
}