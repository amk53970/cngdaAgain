import Menu from '../Menu.js';
import { Button } from 'antd';
import styled from 'styled-components';

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

function CreateAccessToken(){
    fetch("https://f7j73hdw98.execute-api.us-east-1.amazonaws.com/default")
    .then(response => response.json())
    .then((data) => {
        window.open(data.news[0].url);
    })
    .catch((error) => console.error("oops:",error));
}

const F1 = styled.div`
    height: 70px;
    width: 500px;
    align-items: center;
    display: flex;
    padding: 8px 30px;
    justify-content: space-between; 
`
