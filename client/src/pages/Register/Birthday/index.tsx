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
import DatePicker from 'react-native-date-picker';

const Birthday = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const navigation = useNavigation();
  const {width} = Dimensions.get('window');

  const handleBack = () => {
    navigation.goBack();
  };
  const handleNext = () => {
    navigation.navigate('Gender');
  };

  const inputDate = new Date(date);

  const year = inputDate.getFullYear();

  // Şimdi yaş hesaplama işlemi için gerekli olan yılı elde edebiliriz
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.navigationContainer}>
          <Text onPress={handleBack}>Back</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Your Birthday</Text>
          <View style={styles.inputInnerContainer}>
            <DatePicker
              mode="date"
              date={date}
              onDateChange={setDate}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            <Text>Your age is {age}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Next" onPress={handleNext} width={width / 1.15} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Birthday;
