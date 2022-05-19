import React from 'react'
import { Layout, Text, Button, Icon } from '@ui-kitten/components'

import Style from './style'

import Pane from '../../components/Pane'

const HomeScreen = ({ navigation }) => {
  const onBack = () => {
    navigation.goBack()
  }
  return (
    <Layout style={Style.container}>
      <Layout style={Style.container.login}>
        <Layout style={Style.container.login.icon}>
          <Icon name='person-outline' fill='#999' />
        </Layout>
        <Text style={Style.container.login.text}>点击登陆</Text>
      </Layout>

      <Layout style={Style.container.currentOutPay}>
        <Text style={Style.container.currentOutPay.text}>本月支出(元)</Text>
      </Layout>

      <Layout style={Style.container.currentOutPayMoney}>
        <Text style={Style.container.currentOutPayMoney.text}>本月暂无支出</Text>
      </Layout>

      <Layout style={Style.container.currentOutPay}>
        <Text style={Style.container.currentOutPay.text}>本月收入(元): </Text>
        <Text style={Style.container.currentOutPay.moneyText}>暂无收入</Text>
      </Layout>

      <Pane />

      <Button onPress={onBack}>返回</Button>
    </Layout>
  )
}

export default HomeScreen
