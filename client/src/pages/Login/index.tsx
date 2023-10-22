import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../components/Button';

const Login = () => {
  const {width} = Dimensions.get('window');
  return (
    <View style={styles.container}>
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
          <Text style={styles.label}>Your name</Text>
          <View style={styles.inputInnerContainer}>
            <TextInput style={styles.input} placeholder="My Name" />
          </View>
          <Text style={[styles.label, {marginTop: 15}]}>Your name</Text>
          <View style={styles.inputInnerContainer}>
            <TextInput style={styles.input} placeholder="My Name" />
          </View>
        </View>
        <View
          style={{
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button title="Next" width={width / 1.15} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
