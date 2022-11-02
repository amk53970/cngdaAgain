import Menu from '../Menu.js';
import { Button } from 'antd';
import styled from 'styled-components';

const zube_api_key = CreateAccessToken;

function API() {
    return (
        <div>
            <Menu />
            <p>API information will be shown here</p>
            <F1>
                <Button type="primary" onClick={"CreateAccessToken"} style={{width: 100}}>Create Access Token</Button>
                </F1>
        </div>
    )
}

export default API;
/*
function CreateAccessToken(){
    fetch("https://086kx4towj.execute-api.us-east-1.amazonaws.com/A")
    .then(response => response.json())
    .then((data) => {
        window.open(data.news[0].url);
    })
    .catch((error) => console.error("oops:",error));
}
*/

function CreateAccessToken(){
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
return refresh_jwt;
}

const F1 = styled.div`
    height: 70px;
    width: 500px;
    align-items: center;
    display: flex;
    padding: 8px 30px;
    justify-content: space-between; 
`
