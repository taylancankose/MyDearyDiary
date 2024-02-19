import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Name from './Name';
import Email from './Email';
import Birthday from './Birthday';
import Gender from './Gender';
import Password from './Password';

const Stack = createNativeStackNavigator();

const Register = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Name" component={Name} />
      <Stack.Screen name="Email" component={Email} />
      <Stack.Screen name="Birthday" component={Birthday} />
      <Stack.Screen name="Gender" component={Gender} />
      <Stack.Screen name="Password" component={Password} />
    </Stack.Navigator>
  );
};

export default Register;
