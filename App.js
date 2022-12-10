import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './core/theme'

import {
  Login,
  Home,
  Principal,
  Register,
  Session_on,
} from './screens'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Principal" component={Principal} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Session_on" component={Session_on} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
