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
import {useDispatch} from 'react-redux';
import {setAge} from '../../../redux/actions/authActions';

const Birthday = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const {width} = Dimensions.get('window');

  const handleBack = () => {
    navigation.goBack();
  };

  const inputDate = new Date(date);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const yearr = date.getFullYear();

  const formattedDate = `${day}/${month}/${yearr}`;

  const year = inputDate.getFullYear();

  // Şimdi yaş hesaplama işlemi için gerekli olan yılı elde edebiliriz
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  const handleNext = () => {
    dispatch(setAge(formattedDate));
    navigation.navigate('Gender');
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
