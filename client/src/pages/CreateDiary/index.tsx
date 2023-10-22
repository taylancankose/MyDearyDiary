import {View, Text, TextInput, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import DiaryBottomTab from '../../components/DiaryBottomTab';

const CreateDiary = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.navigationContainer}>
          <Icon
            name="chevron-left"
            size={24}
            onPress={() => navigation.goBack()}
          />
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Save</Text>
          </Pressable>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>22 Eki 2023</Text>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              multiline={true}
              placeholder="Title"
              style={styles.titleInput}
            />
            <TextInput
              multiline={true}
              placeholder="Diary Note"
              style={styles.noteInput}
            />
          </View>
        </View>
      </View>

      <DiaryBottomTab />
    </View>
  );
};

export default CreateDiary;
