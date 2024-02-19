import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../assets/colors/colors';

const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  btn: {
    height: 50,
    backgroundColor: colors.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  btnGhost: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginTop: 10,
    borderWidth: 2,
    borderColor: colors.fifthColor,
  },
  btnGhostText: {
    color: colors.fifthColor,
    fontSize: 16,
    fontWeight: '600',
  },
});
