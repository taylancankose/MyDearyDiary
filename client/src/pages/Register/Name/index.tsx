import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const Name = () => {
  const navigation = useNavigation();
  const {width} = Dimensions.get('window');
  const handleBack = () => {
    navigation.goBack();
  };
  const handleNext = () => {
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
            <TextInput style={styles.input} placeholder="My Name" />
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
