import './polyfill'

import { registerRootComponent } from 'expo'
import { Text } from 'react-native'

if (__DEV__) {
  import('./flipper-config').then(() => console.log('Flipper Configured'))
}

export default function App () {
  return <Text>Hello world</Text>
}

registerRootComponent(App)
