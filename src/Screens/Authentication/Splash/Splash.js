import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AppLogo} from '../../../Assets/Images/Svg/SvgImages';
import styles from './styles';
import Video from 'react-native-video';
import BackgroundVideo from '../../../Assets/Video/splash.mp4';
import SvgComponent from '../../../Components/Common/SvgCustomComponents/SvgCustomComponents';
import Storage from '../../../Auth/Storage';
const Splash = ({navigation}) => {
  // const {user, setUser} = useAuth();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Video
        source={BackgroundVideo}
        style={styles.bgVideo}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
      />

      <View style={styles.overlayView}>
        <View style={styles.skipContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.skipText}>{'Skip'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logoContainer}>
          <SvgComponent svgMarkup={AppLogo} />
        </View>
      </View>
    </View>
  );
};

export default Splash;
