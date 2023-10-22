import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import Onboarding from './src/pages/Onboarding';
import Login from './src/pages/Login';
import Register from './src/pages/Register/';
import Home from './src/pages/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './src/pages/Profile';
import Settings from './src/pages/Settings';
import FutureNote from './src/pages/FutureNote';
import CreateDiary from './src/pages/CreateDiary';
import Icon from 'react-native-vector-icons/Feather';
import {Platform, View} from 'react-native';
import {colors} from './src/assets/colors/colors';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const [loggedIn, setLoggedIn] = useState(true);
  const onBoardingStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={Onboarding} name="Onboarding" />
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Register} name="Register" />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      {loggedIn ? (
        <Tab.Navigator>
          <Tab.Screen component={Home} name="Home" />
          <Tab.Screen component={FutureNote} name="FutureNote" />
          <Tab.Screen
            component={CreateDiary}
            name="CreateDiary"
            options={{
              tabBarIcon: () => {
                return (
                  <View
                    style={{
                      top: Platform.OS == 'ios' ? -5 : -15,
                      width: Platform.OS == 'ios' ? 40 : 50,
                      height: Platform.OS == 'ios' ? 40 : 50,
                      borderRadius: Platform.OS == 'ios' ? 25 : 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: colors.fourthColor,

                      elevation: 5,
                    }}>
                    <Icon name="plus" size={24} color={'white'} />
                  </View>
                );
              },
              title: '',
              headerShown: false,
              tabBarStyle: {
                display: 'none',
              },
            }}
          />
          <Tab.Screen component={Profile} name="Profile" />
          <Tab.Screen component={Settings} name="Settings" />
        </Tab.Navigator>
      ) : (
        <Stack.Screen component={onBoardingStack} name="onBoardingStack" />
      )}
    </NavigationContainer>
  );
}

export default App;
