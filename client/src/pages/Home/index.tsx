import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import styles from './styles';

const Home = () => {
  const [selected, setSelected] = useState('');
  const [diary, setDiary] = useState({
    title: 'Günlük Title',
    note: 'Günlük içerik',
    createdAt: '15:25',
  });

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
          },
        }}
      />
      {diary ? (
        <View style={styles.diaryContainer}>
          <Text style={styles.date}>{diary?.createdAt}</Text>
          <Text style={styles.mood}>🙂</Text>
          <Text style={styles.diaryTitle}>{diary?.title}</Text>
          <Text style={styles.diaryNote}>{diary?.note}</Text>
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>
            There is nothing to {'\n'}display here
          </Text>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Create Diary</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Home;
