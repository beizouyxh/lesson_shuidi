import React , {useState} from 'react';
import 'antd/dist/antd.css';
import { Card, Input,Button ,Spin,message } from 'antd';
import "../public/style/Login.css";
function Login(){
    const [userName , setUserName] = useState('')
    const [password , setPassword] = useState('')
    const [isLoading] = useState(false)
    const checkLogin = () => {
          if (!userName) {
            message.error("请输入用户名");
            return;
          } else if (!password) {
            message.error("请输入密码");
            return;
          }
      }
    return (
        <div className="login-div">

            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="北走的博客系统" bordered={true} style={{ width: 400 }} >
                    <Input
                        id="userName"
                        size="large"
                        placeholder="请输入用户名"
                        // prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e)=>{setUserName(e.target.value)}}
                    /> 
                    <br />
                    <br />
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="请输入密码"
                        // prefix={<Icon type="key" style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />     
                    <br/><br/>
                    <Button type="primary" size="large" block onClick={checkLogin} > Login in </Button>
                </Card>
            </Spin>
        </div>
    )
}
export default Login

