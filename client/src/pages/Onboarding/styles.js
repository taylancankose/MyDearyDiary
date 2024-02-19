import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../assets/colors/colors';

const {width, height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    flex: 0.4,
  },
  image: {
    flex: 1,
    height: 20,
    width: width,
  },
  titleContainer: {
    justifyContent: 'center',
    flex: 0.3,
    marginHorizontal: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: 60,
    textTransform: 'lowercase',
    textAlign: 'left',
    color: colors.fourthColor,
  },
  buttonContainer: {
    flex: 0.3,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  description: {
    marginVertical: 20,
    fontSize: 15,
  },
});
