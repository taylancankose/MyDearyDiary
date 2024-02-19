import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Button from '../../../components/Button';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setEmail} from '../../../redux/actions/authActions';

const Email = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmailAdrs] = useState('');
  const {width} = Dimensions.get('window');

  const handleBack = () => {
    navigation.goBack();
  };
  const handleNext = () => {
    dispatch(setEmail(email));
    navigation.navigate('Birthday');
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
          <Text style={styles.label}>Your Email</Text>
          <View style={styles.inputInnerContainer}>
            <TextInput
              type="email"
              onChangeText={txt => setEmailAdrs(txt)}
              style={styles.input}
              placeholder="My Email"
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

export default Email;
