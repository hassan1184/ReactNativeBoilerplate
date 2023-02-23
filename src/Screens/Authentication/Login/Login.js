import React, {useState, useEffect} from 'react';
import {
  View,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  BackHandler,
} from 'react-native';
import styles from './styles';
import * as Yup from 'yup';
import images from '../../../Assets/Images';
import SvgComponent from '../../../Components/Common/SvgCustomComponents/SvgCustomComponents';
import {
  AppLogoSmall,
  eyeClose,
  eyeOpen,
} from '../../../Assets/Images/Svg/SvgImages';
import colors from '../../../Assets/Colors/Colors';
import AppForm from '../../../Components/Common/FormComponents/AppForm';
import AppFromField from '../../../Components/Common/FormComponents/AppFormField';
import SubmitButton from '../../../Components/Common/FormComponents/SubmitButton';

// import useAuth from '../../../Auth/useAuth';
import Storage from '../../../Auth/Storage';
import Toast from 'react-native-toast-message';

const Login = () => {
  // const {storeUserDetails} = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [isSecureEntry, setIsSecureEntry] = useState(true);
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Please enter valid email')
      .required('Email is required field'),
    password: Yup.string().required('Password is required field'),
  });
  // const loginUser = async value => {
  //   const fcm_token = await Storage.getFcmToken();
  //   console.log('Fcm token <<<<<<<<<<===>>>>>>>>>>', fcm_token);
  //   if (fcm_token === '') {
  //     Toast.show({
  //       type: 'error',
  //       text2: 'precede your request to get fcm token',
  //     });
  //   } else {
  //     setIsLoading(true);
  //     const result = await apiClient.post(
  //       END_POINTS.loginapi,

  //       JSON.stringify({
  //         db: 'Mystic',
  //         login: value.email,
  //         password: value.password,
  //         fcm_token: fcm_token,
  //       }),
  //       {
  //         headers: {
  //           'Content-Type': 'text/plain',
  //         },
  //       },
  //     );
  //     console.log('login respons  <<<<<======LOGIN=====>>>>>>', result.data);
  //     if (result.ok) {
  //       setIsLoading(false);
  //       console.log('==login==success===>>>', result.data);
  //       storeUserDetails(result?.data);
  //     } else {
  //       setIsLoading(false);
  //       console.log('===server==error====>>>>', result.data);
  //       Toast.show({
  //         type: 'error',
  //         text1: 'error',
  //         text2: result.data?.message,
  //       });
  //     }
  //   }
  // };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.SaveAreaColorLogin}]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ImageBackground
          resizeMode={'cover'}
          style={styles.container}
          source={images.LoginBackground}>
          <ScrollView
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}>
            <View style={styles.logoContainer}>
              <SvgComponent svgMarkup={AppLogoSmall} />
            </View>
            <AppForm
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={() => console.log('submit')}>
              <View style={styles.inputsContainer}>
                <Text style={styles.signInText}>{'Sign In'}</Text>
                <AppFromField
                  placeholder="Email"
                  autoCapitalize="none"
                  name="email"
                  autoCorrect={false}
                  borderColor={colors.WHITE}
                />
                <AppFromField
                  placeholder="Password"
                  autoCapitalize="none"
                  name="password"
                  autoCorrect={false}
                  borderColor={colors.WHITE}
                  onRightIconPress={() => setIsSecureEntry(!isSecureEntry)}
                  rightSvgIcon={isSecureEntry ? eyeClose : eyeOpen}
                  secureTextEntry={isSecureEntry}
                  TextContentType="password"
                />
              </View>
              <View style={styles.buttonContainer}>
                <SubmitButton
                  title={'Sign In'}
                  loading={isLoading}
                  disable={isLoading}
                />
              </View>
            </AppForm>
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
