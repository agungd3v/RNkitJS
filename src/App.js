import React from 'react'
import { SafeAreaView } from 'react-native'
import Router from './Router'

const App = () => {
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Router />
    </SafeAreaView>
  )
}

export default App