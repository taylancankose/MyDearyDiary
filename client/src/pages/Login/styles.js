import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../assets/colors/colors';

const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    flex: 0.3,
  },
  image: {
    flex: 1,
    height: 20,
    width: width,
  },
  titleContainer: {
    justifyContent: 'center',
    flex: 0.2,
    marginHorizontal: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: 40,
    textTransform: 'lowercase',
    textAlign: 'left',
    color: colors.fourthColor,
  },
  description: {
    marginVertical: 20,
    fontSize: 15,
  },
  inputContainer: {
    flex: 0.6,
    justifyContent: 'center',
  },
  label: {
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    marginBottom: 10,
    marginLeft: width / 15,
  },
  input: {
    width: width / 1.15,
    marginHorizontal: 10,
    backgroundColor: colors.sixthColor,
    borderRadius: 10,
  },
  inputInnerContainer: {
    alignItems: 'center',
  },
});
