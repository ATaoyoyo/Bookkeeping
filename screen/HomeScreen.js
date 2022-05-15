import React from 'react'
import { SafeAreaView } from 'react-native'
import { TopNavigation, Layout, Text, Button, Icon, Divider } from '@ui-kitten/components'

import { ThemeContext } from '../themes/theme-context'

const HomeIcon = (props) => <Icon name='home' {...props} />
const ThemeIcon = (props) => <Icon name='car' {...props} />

const HomeScreen = ({ navigation }) => {
  const themeContext = React.useContext(ThemeContext)

  const onNavigateDetails = () => {
    navigation.navigate('Detail')
  }

  const onToggleTheme = () => {
    themeContext.toggleTheme()
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='HomeScreen' alignment='center' />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>HOME</Text>

        <Button accessoryLeft={HomeIcon} onPress={onNavigateDetails}>
          Open Details.
        </Button>

        <Divider />
        <Divider />
        <Divider />

        <Button accessoryLeft={ThemeIcon} onPress={onToggleTheme}>
          Toggle Theme
        </Button>
      </Layout>
    </SafeAreaView>
  )
}

export default HomeScreen
