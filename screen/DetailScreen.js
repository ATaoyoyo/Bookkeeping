import React from 'react'
import { SafeAreaView } from 'react-native'
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components'

const BackIcon = (props) => <Icon {...props} name='arrow-back' />

const DetailScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack()
  }

  const backAction = () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='DetailScreen' alignment='center' accessoryLeft={backAction} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>DETAIL</Text>
      </Layout>
    </SafeAreaView>
  )
}

export default DetailScreen
