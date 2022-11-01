import jsonwebtoken from jsonwebtoken;
var fs = require('fs');
var jsonwebtoken = require('jsonwebtoken'); // $ npm install jsonwebtoken

var client_id = 'ed4cfc1a-48d1-11ed-9721-8fed3ea79b2a';
var private_key = fs.readFileSync('https://github.com/amk53970/cngdaAgain/blob/d8d087306a53db3aabb302f843b1ec2c5addfe6b/zube_api_key%20(1).pem');

var now = Math.floor(Date.now() / 1000);
var refresh_jwt = jsonwebtoken.sign({
    iat: now,      // Issued at time
    exp: now + 60, // JWT expiration time (10 minute maximum)
    iss: client_id // Your Zube client id
}, private_key, { algorithm: 'RS256' });

console.log(refresh_jwt);