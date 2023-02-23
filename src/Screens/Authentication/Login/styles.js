import {StyleSheet} from 'react-native';
import colors from '../../../Assets/Colors/Colors';
import {hp, wp} from '../../../Utills/CommonMethods/CommonMethods';
import fonsts from '../../../Assets/Fonts/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputsContainer: {
    flex: 0.3,
    flexDirection: 'column',
    marginHorizontal: wp(6),
  },
  signInText: {
    color: colors.WHITE,
    fontSize: fonsts.H6,
    fontWeight: 'bold',
    left: wp(1),
    marginBottom: hp(1.5),
  },
  forgotContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  forgotText: {
    color: colors.WHITE,
    fontSize: fonsts.H10,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 0.35,
    marginHorizontal: wp(6),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: hp(1),
  },
});

export default styles;
