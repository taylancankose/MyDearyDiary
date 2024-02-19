import {View, Text, Platform, Settings} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import FutureNote from './pages/FutureNote';
import CreateDiary from './pages/CreateDiary';
import {colors} from './assets/colors/colors';
import Profile from './pages/Profile';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import Register from './pages/Register';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Rooter = () => {
  const [accessToken, setAccessToken] = useState();
  console.log(accessToken);
  useEffect(() => {
    const checkAccessToken = async () => {
      try {
        const token: string | null = await AsyncStorage.getItem('accessToken');
        if (token) {
          setAccessToken(token);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkAccessToken();
  }, []);
  return (
    <NavigationContainer>
      {accessToken ? (
        <Tab.Navigator>
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <Icon
                    name="book-open"
                    size={20}
                    color={focused ? 'blue' : 'grey'}
                  />
                );
              },
            }}
            component={Home}
            name="Home"
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <Icon
                    name="square"
                    size={20}
                    color={focused ? 'blue' : 'grey'}
                  />
                );
              },
            }}
            component={FutureNote}
            name="FutureNote"
          />
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
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <Icon
                    name="user"
                    size={20}
                    color={focused ? 'blue' : 'grey'}
                  />
                );
              },
            }}
            component={Profile}
            name="Profile"
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <Icon
                    name="settings"
                    size={20}
                    color={focused ? 'blue' : 'grey'}
                  />
                );
              },
            }}
            component={Settings}
            name="Settings"
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen component={Onboarding} name="Onboarding" />
          <Stack.Screen component={Login} name="Login" />
          <Stack.Screen component={Register} name="Register" />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Rooter;
