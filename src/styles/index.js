import {StyleSheet} from 'react-native';
import COLORS from '../consts/color';

const STYLES = StyleSheet.create({
  inputContainer: {
    marginStart: 30,
    marginEnd: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  input: {
    color: COLORS.light,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: COLORS.light,
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  },
  inputIcon: {
    marginTop: 15,
    position: 'absolute',
  },
  btnPrimary: {
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  line: {
    width: 30,
    borderWidth: 1,
    color: COLORS.light,
  },
  btnSecondary: {
    flexDirection: 'row',
    height: 50,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 50,
    flex: 1,
  },
  btnImage: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
});

export default STYLES;
