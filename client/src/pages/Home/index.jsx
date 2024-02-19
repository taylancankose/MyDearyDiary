import {View, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import styles from './styles';
import axios from 'axios';
import {BASE_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const today = new Date();
  const initialSelectedDate = today.toISOString().split('T')[0];
  const [accessToken, setAccessToken] = useState();
  const [selected, setSelected] = useState(initialSelectedDate);
  const [diary, setDiary] = useState();

  useEffect(() => {
    const checkAccessToken = async () => {
      try {
        const token: string | null = await AsyncStorage.getItem('accessToken');
        if (token) {
          setAccessToken(token);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkAccessToken();
  }, []);

  console.log(accessToken, 'home');
  const getDiaryByDate = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const bodyParam = {
      params: {
        date: '2023-12-12',
      },
    };
    try {
      const response = await axios.get(`${BASE_URL}/diary/date/date`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          date: '2023-12-12',
        },
      });
      const data = response.data;
      setDiary(data.diary);
    } catch (error) {
      console.error('Axios Error:', error);
      await AsyncStorage.removeItem('accessToken');
    }
  };

  useEffect(() => {
    getDiaryByDate();
  }, [selected]);

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
          <Text style={styles.diaryNote}>{diary?.content}</Text>
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
