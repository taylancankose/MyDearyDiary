import {View, Text, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Onboarding = () => {
  const {width} = Dimensions.get('window');
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleRegister = () => {
    navigation.navigate('Register', {screen: 'Name'});
  };
  const getDiaries = async () => {
    try {
      const data = await axios.get('http://localhost:4000/diary/all', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTcwNDEwOGU5ZWQ0MjBjNTkwYjU3MGYiLCJpYXQiOjE3MDgwODgyMzgsImV4cCI6MTcxMDY4MDIzOH0.DrGDdDt4qT5iF4lcRpZUydd5acfnX-LVa6sgWMF0mPE',
        },
      });
      console.log('asd');

      const res = await data.data;
      console.log(res, ' data');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDiaries();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/bg.png')}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Deary {'\n'}Diary</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.description}>
          Use the mood diary to track your state and get tips how to improve
          your state
        </Text>
        <Button
          title="Register"
          onPress={handleRegister}
          width={width / 1.15}
        />
        <Button
          title="Login"
          onPress={handleLogin}
          type="ghost"
          width={width / 1.15}
        />
      </View>
    </View>
  );
};

export default Onboarding;
