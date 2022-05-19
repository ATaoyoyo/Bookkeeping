import React from 'react'
import { Layout, Text, Button } from '@ui-kitten/components'

import Style from './style'

const HomeScreen = ({ navigation }) => {
  const onBack = () => {
    navigation.goBack()
  }
  return (
    <Layout style={Style.container}>
      <Text>Home Screen</Text>
      <Button onPress={onBack}>返回</Button>
    </Layout>
  )
}

export default HomeScreen
