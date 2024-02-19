import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    position: 'absolute',
    bottom: 0,
    width: width,
    borderTopWidth: 1,
    borderColor: '#ECECEC',
  },
});
