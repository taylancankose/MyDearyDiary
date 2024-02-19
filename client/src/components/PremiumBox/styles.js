import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../assets/colors/colors';

const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    padding: 20,
    marginTop: 15,
    borderRadius: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
});
