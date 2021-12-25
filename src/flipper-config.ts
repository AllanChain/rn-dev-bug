// ....
import { connectToDevTools } from 'react-devtools-core'
import { NativeModules } from 'react-native'

const { hostname } = new URL(NativeModules.SourceCode.scriptURL)

connectToDevTools({
  host: hostname,
  port: 8097
})
