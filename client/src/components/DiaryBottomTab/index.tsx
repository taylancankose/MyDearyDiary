import {View} from 'react-native';
import React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const DiaryBottomTab = () => {
  return (
    <View style={styles.bottomTab}>
      <View>
        <MaterialCommunityIcon name="sticker-emoji" size={20} color={'black'} />
      </View>
      <View>
        <MaterialCommunityIcon name="image-outline" size={20} color={'black'} />
      </View>
      <View>
        <MaterialCommunityIcon name="format-text" size={20} color={'black'} />
      </View>
      <View>
        <MaterialCommunityIcon name="wallpaper" size={20} color={'black'} />
      </View>
      <View>
        <MaterialCommunityIcon
          name="sticker-outline"
          size={20}
          color={'black'}
        />
      </View>
    </View>
  );
};

export default DiaryBottomTab;
