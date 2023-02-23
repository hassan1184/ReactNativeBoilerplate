import {StyleSheet, Dimensions, Platform} from 'react-native';
import colors from '../../../Assets/Colors/Colors';
import {hp, wp} from '../../../Utills/CommonMethods/CommonMethods';
import fonsts from '../../../Assets/Fonts/fonts';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgVideo: {
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
    opacity: 0.2,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlayView: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(6,174,175,0.5)',
  },
  skipContainer: {
    flex: 0.1,
    alignItems: 'flex-end',
    justifyContent: Platform.OS === 'ios' ? 'flex-end' : 'center',
  },
  skipText: {
    color: colors.WHITE,
    right: wp(5),
    fontSize: fonsts.H6,
    fontWeight: '400',
  },
  logoContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
