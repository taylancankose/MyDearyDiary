import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

const PremiumBox = () => {
  return (
    <Pressable onPress={() => console.log('first')}>
      <LinearGradient
        colors={['#f7c0ec', '#a7bdea']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.container}>
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.title}>Premium</Text>
            <Text>Uygulamadan daha çok avantaj edinin</Text>
          </View>
          <Icon name="chevrons-up" color={'white'} size={34} />
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default PremiumBox;
