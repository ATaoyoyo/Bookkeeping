import React from 'react'
import { View, Image } from 'react-native'
import { Input, Button, Layout } from '@ui-kitten/components'

import BIcon from '../../components/Icon'

import style from './style'

const LoginScreen = () => {
  const loginImg = require('../../assets/images/loginBg.png')

  return (
    <Layout style={style.container} level='1'>
      <View style={style.loginBg}>
        <Image
          style={style.logo}
          source={loginImg}
          resizeMode='contain'
          accessibilityLabel='图片,登陆图片'
        />
      </View>

      <Layout style={style.from}>
        <View style={style.fromItem}>
          <BIcon name='person-outline' size='32' />
          <Input style={style.input} placeholder='Username' />
        </View>

        <View style={style.fromItem}>
          <BIcon name='lock' size='32' />
          <Input style={style.input} placeholder='Password' />
        </View>
      </Layout>

      <Button>登 陆</Button>
    </Layout>
  )
}

export default LoginScreen
