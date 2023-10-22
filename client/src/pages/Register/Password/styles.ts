import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../assets/colors/colors';

const {width, height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navigationContainer: {
    marginHorizontal: width / 12,
    marginTop: 30,
    marginBottom: 40,
  },
  inputContainer: {
    flex: 0.7,
    marginBottom: 50,
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginHorizontal: width / 12,
    marginBottom: 25,
  },
  inputInnerContainer: {alignItems: 'center', marginTop: 15},
  input: {
    width: width / 1.2,
    backgroundColor: colors.sixthColor,
    borderRadius: 10,
    padding: 10,
  },
  buttonContainer: {
    flex: 0.3,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    marginBottom: 30,
  },
});
