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
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setName} from '../../../redux/actions/authActions';

const Name = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [name, setNamee] = useState('');
  const {width} = Dimensions.get('window');
  const handleBack = () => {
    navigation.goBack();
  };
  const handleNext = () => {
    dispatch(setName(name));
    navigation.navigate('Email');
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
          <Text style={styles.label}>Your name</Text>
          <View style={styles.inputInnerContainer}>
            <TextInput
              onChangeText={txt => setNamee(txt)}
              style={styles.input}
              placeholder="My Name"
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

export default Name;
