import Toast, {ErrorToast, BaseToast} from 'react-native-toast-message';

import React from 'react';

import colors from '../Assets/Colors/Colors';
import {hp} from './CommonMethods/CommonMethods';
export const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      text1Style={{
        fontSize: hp(1.9),
        fontWeight: '800',
        color: colors.success,
      }}
      contentContainerStyle={{
        borderColor: colors.success,
        borderWidth: 0.5,
        borderRadius: 10,
      }}
      style={{
        borderLeftColor: colors.success,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: colors.success,
      }}
      text2Style={{
        fontSize: hp(1.4),
        color: colors.primaryColor,
      }}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: hp(1.9),
        fontWeight: '800',
        color: colors.danger,
      }}
      contentContainerStyle={{
        borderColor: colors.danger,
        borderWidth: 0.5,
        borderRadius: 2,
      }}
      style={{
        borderLeftColor: colors.danger,
        borderWidth: 0.5,
        borderRadius: 8,
        borderColor: colors.danger,
      }}
      text2Style={{
        fontSize: hp(1.4),
        color: colors.danger,
      }}
    />
  ),
  tomatoToast: ({text1, props}) => (
    <View style={{height: 60, width: '100%', backgroundColor: 'tomato'}}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};
