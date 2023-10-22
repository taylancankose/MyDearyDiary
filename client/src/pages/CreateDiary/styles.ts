import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navigationContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: 'coral',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  btnText: {
    color: 'white',
    fontWeight: '700',
  },
  dateContainer: {
    borderBottomWidth: 1,
    borderColor: '#ECECEC',
    marginTop: 15,
  },
  date: {
    fontSize: 16,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  innerContainer: {
    margin: 20,
  },
  inputContainer: {
    marginTop: 10,
  },
  titleInput: {
    fontSize: 20,
  },
  noteInput: {
    marginVertical: 6,
    fontSize: 16,
  },
});
