import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { Input, Button, Layout, Text } from '@ui-kitten/components'

import style from './style'

const InputLabel = ({ text }) => (
  <View style={style.labelText}>
    <Text style={style.labelText.text}>{text}</Text>
  </View>
)

const LoginScreen = () => {
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })

  const getCode = () => {}

  const onLogin = () => {}

  return (
    <Layout style={style.container}>
      <Layout style={style.desc}>
        <Text style={style.desc.info} category='h1'>
          记录，
        </Text>
        <Text style={style.desc.info} category='h1'>
          让生活更简单。
        </Text>
      </Layout>

      <Layout style={style.from}>
        <View style={style.from.fromItem}>
          <Input
            size='large'
            label={<InputLabel text='手机号' />}
            value={loginForm.username}
            style={style.from.fromItem.input}
            placeholder='请输入手机号'
            onChangeText={(username) => setLoginForm({ ...loginForm, username })}
          />
        </View>

        <View style={style.from.fromItem}>
          <Input
            size='large'
            label={<InputLabel text='验证码' />}
            value={loginForm.password}
            style={style.from.fromItem.input}
            placeholder='请输入验证码'
            onChangeText={(password) => setLoginForm({ ...loginForm, password })}
          />

          <View style={style.from.fromItem.code}>
            <Text style={style.from.fromItem.code.text}>获取验证码</Text>
          </View>
        </View>

        <Button style={style.from.loginButton}>登 陆</Button>
      </Layout>

      <Layout style={style.bottom}>
        <Layout>
          <Text style={style.otherLogin} category='h6'>
            — — — — 第三方登录 — — — —
          </Text>
        </Layout>

        <Layout style={style.otherChat}>
          <View style={style.otherChat.icon}>
            <Image source={require('../../assets/images/login/qq.png')} />
          </View>
          <View style={style.otherChat.icon}>
            <Image source={require('../../assets/images/login/wx.png')} />
          </View>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LoginScreen
