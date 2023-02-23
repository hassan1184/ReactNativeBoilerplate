import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import SvgComponent from '../SvgCustomComponents/SvgCustomComponents';
import colors from '../../../Assets/Colors/Colors';
import {hp, wp} from '../../../Utills/CommonMethods/CommonMethods';

function AppTextInput({
  leftIcon,
  rightIcon,
  floatingLabel,
  changeIconLibrary = false,
  width = wp(96),
  backgroundColor = colors.WHITE,
  changeinputField,
  top = 4,
  marginRight = 0,
  editable,
  leftSvgIcon,
  rightSvgIcon,
  //svgimageIconPath,
  onRightIconPress,
  borderWidth,
  borderColor = colors.WHITE,
  borderRadius = 10,
  padding = Platform.OS === 'android' ? hp(1.4) : hp(1.7),
  ...otherProps
}) {
  return (
    <>
      {floatingLabel && (
        <View style={styles.floatingLabelContainer}>
          <Text style={styles.floatingLabel}>{floatingLabel}</Text>
        </View>
      )}
      <View
        style={[
          styles.container,
          {
            width,
            backgroundColor: backgroundColor,
            borderWidth: borderWidth ? borderWidth : 0.6,
            borderColor: borderColor,
            borderRadius: borderRadius,
          },
        ]}>
        {leftSvgIcon && (
          <View
            style={{
              marginLeft: '3%',
              alignSelf: 'center',
            }}>
            <SvgComponent svgMarkup={leftSvgIcon} />
          </View>
        )}

        <TextInput
          editable={editable}
          placeholderTextColor={colors.placeHolderColor}
          style={[
            {
              padding: padding,
              marginRight: marginRight,
              width: rightSvgIcon ? '88%' : '93%',
              textAlign: 'justify',
              color: colors.BLACK,
              marginLeft: '1.5%',
            },
          ]}
          {...otherProps}
        />
        {rightSvgIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={{
              flex: 1,
              alignItems: 'flex-end',
              ...Platform.select({
                android: {
                  marginRight: '2%',
                },
              }),

              marginRight: '3%',
            }}>
            <SvgComponent svgMarkup={rightSvgIcon} />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    borderColor: colors.primary,
    backgroundColor: colors.WHITE,
  },
  icon: {
    marginRight: 10,
  },
  floatingLabelContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 1,
    left: 20,
    // top: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingLabel: {
    textAlign: 'center',
    marginLeft: '2%',
    marginRight: '2%',
    color: colors.APP_PRIMARY_COLOR,
    fontWeight: '500',
  },
});

export default AppTextInput;
