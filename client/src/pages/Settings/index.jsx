import {View, Text} from 'react-native';
import React from 'react';
import PremiumBox from '../../components/PremiumBox';
import styles from './styles';

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContaier}>
        <Text>Settings</Text>
        <PremiumBox />
      </View>
    </View>
  );
};

export default Settings;
