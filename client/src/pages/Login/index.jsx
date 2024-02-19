import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Button from '../../components/Button';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from '@env';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [user, setUser] = useState();
  const navigation = useNavigation();
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email: credentials.email,
        password: credentials.password,
      });
      const res = await response.data;
      setUser(res);
      console.log('user', user);
      if (user) {
        await AsyncStorage.setItem('accessToken', user?.token);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const {width} = Dimensions.get('window');
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/bg.png')}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Deary {'\n'}Diary</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <View style={styles.inputInnerContainer}>
          <TextInput
            style={styles.input}
            placeholder="My Email"
            value={credentials.email}
            onChangeText={text => setCredentials({...credentials, email: text})}
          />
        </View>
        <Text style={[styles.label, {marginTop: 15}]}>Password</Text>
        <View style={styles.inputInnerContainer}>
          <TextInput
            style={styles.input}
            placeholder="My Password"
            value={credentials.password}
            onChangeText={text =>
              setCredentials({...credentials, password: text})
            }
            secureTextEntry
          />
        </View>
      </View>
      <View
        style={{
          flex: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Button title="Login" width={width / 1.15} onPress={handleLogin} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
