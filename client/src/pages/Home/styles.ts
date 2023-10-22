import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  diaryContainer: {
    flex: 1,
    padding: 20,
  },
  date: {
    marginVertical: 6,
  },
  mood: {
    fontSize: 30,
    color: 'black',
    marginBottom: 6,
  },
  diaryTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  diaryNote: {
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },
  btn: {
    marginTop: 15,
    padding: 15,
    backgroundColor: colors.sixthColor,
    borderRadius: 5,
  },
  btnText: {
    color: 'black',
    fontWeight: '500',
  },
});
