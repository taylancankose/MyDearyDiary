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
import {setGender} from '../../../redux/actions/authActions';

const Gender = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelection = gender => {
    if (selectedGender === gender) {
      setSelectedGender(null);
    } else {
      setSelectedGender(gender);
    }
  };

  const {width} = Dimensions.get('window');
  const handleBack = () => {
    navigation.goBack();
  };
  const handleNext = () => {
    dispatch(setGender(selectedGender));
    navigation.navigate('Password');
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
          <Text style={styles.label}>Your Gender</Text>
          <View style={styles.inputInnerContainer}>
            <Button
              title="Female"
              onPress={() => handleGenderSelection('female')}
              width={width / 1.15}
              type={selectedGender !== 'female' && 'ghost'}
            />
            <Button
              title="Male"
              onPress={() => handleGenderSelection('male')}
              width={width / 1.15}
              type={selectedGender !== 'male' && 'ghost'}
            />
            <Button
              title="Non-Binary"
              onPress={() => handleGenderSelection('non-binary')}
              width={width / 1.15}
              type={selectedGender !== 'non-binary' && 'ghost'}
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

export default Gender;
