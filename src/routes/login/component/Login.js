import React from 'react'
import { Input, Button } from 'antd'

const Login = ({ dispatch }) => {
  return (
    <div>
      <Input placeholder="输入账号" />
      <Input placeholder="输入密码" />
      <Button>登录</Button>
    </div>
  )
}
export default Login
