const qs = require('querystring');
const cryptoModule = require('crypto');
import express = require('express');

function checkSign(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    const urlParams = qs.parse(URL_PARAMS);
    const ordered = {};
    Object.keys(urlParams).sort().forEach((key) => {
        if (key.slice(0, 3) === 'vk_') {
            ordered[key] = urlParams[key];
        }
    });

    const stringParams = qs.stringify(ordered);
    const paramsHash = cryptoModule
        .createHmac('sha256', secretKey)
        .update(stringParams)
        .digest()
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=$/, '');

    if(paramsHash === urlParams.sign) {
        return "200"
    }
}



