import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Button from '../../../components/Button';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../../redux/actions/authActions';

const Password = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [password, setPassword] = useState();
  const name = useSelector(state => state.auth.name);
  const email = useSelector(state => state.auth.email);
  const gender = useSelector(state => state.auth.gender);
  const age = useSelector(state => state.auth.age);

  const {width} = Dimensions.get('window');

  const handleBack = () => {
    navigation.goBack();
  };
  const userData = {
    username: 'Teco',
    password: '123456',
    email: 'taylancankoseeee@gmail.com',
    birthDay: '12/09/1998',
    gender: 'male',
  };
  const handleNext = () => {
    dispatch(register(userData));
    //navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.navigationContainer}>
          <Text onPress={handleBack}>Back</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter a Password</Text>
          <View style={styles.inputInnerContainer}>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="Password"
            />
          </View>
          <View style={styles.inputInnerContainer}>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="Confirm Password"
              onChangeText={txt => setPassword(txt)}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Next" onPress={handleNext} width={width / 1.15} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Password;
