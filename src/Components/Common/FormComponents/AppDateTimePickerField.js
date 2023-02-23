import {StyleSheet, Text, View, Platform, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import {hp, wp} from '../../../Utills/CommonMethods/CommonMethods';
import colors from '../../../Assets/Colors/Colors';
import fonts from '../../../Assets/Fonts/fonts';
import SvgComponent from '../SvgCustomComponents/SvgCustomComponents';
import ValidationErrorMessage from './ValidationErrorMessage';
import {useFormikContext} from 'formik';

const AppDateTimePickerField = ({
  label,
  name,
  mode = 'date',
  rightSvgIcon,
  borderColor = colors.APP_PRIMARY_COLOR,
  minimumDate = new Date(),
  maximumDate,
  floatingLabel,
  placeholder,
}) => {
  const {
    handleChange,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
    values,
  } = useFormikContext();
  const currentDate = new Date();
  const [openArrivalDateTImeTime, setOpenArrivalDateTImeTime] = useState(false);
  const [arrivalDateTIme, setArrivalDateTIme] = useState();
  return (
    <View>
      {floatingLabel && (
        <View style={styles.floatingLabelContainer}>
          <Text style={styles.floatingLabel}>{floatingLabel}</Text>
        </View>
      )}
      <Text style={styles.lableText}>{label}</Text>

      <View style={[styles.inputView, {borderColor: borderColor}]}>
        <DatePicker
          modal
          mode={mode}
          minimumDate={minimumDate}
          open={openArrivalDateTImeTime}
          date={minimumDate}
          maximumDate={maximumDate}
          androidVariant="iosClone"
          is24hourSource="locale"
          locale={'en_GB'}
          onConfirm={date => {
            setFieldValue(
              name,
              mode === 'datetime'
                ? moment(date).format('YYYY-MM-DD HH:mm:ss')
                : moment(date).format('YYYY-MM-DD HH:mm:ss'),
            );
            setOpenArrivalDateTImeTime(false);
            setArrivalDateTIme(date);
          }}
          onCancel={() => {
            setOpenArrivalDateTImeTime(false);
          }}
        />
        <TouchableOpacity
          onBlur={() => setFieldTouched(name)}
          style={styles.dateView}
          onPress={() => setOpenArrivalDateTImeTime(true)}>
          <Text style={styles.datePickerText}>
            {arrivalDateTIme ? (
              mode === 'datetime' ? (
                moment(arrivalDateTIme).format('YYYY-MM-DD HH:mm:ss')
              ) : (
                moment(arrivalDateTIme).format('YYYY-MM-DD HH:mm:ss')
              )
            ) : (
              <Text style={styles.placeholderText}>{placeholder}</Text>
            )}
          </Text>
        </TouchableOpacity>
        {rightSvgIcon && (
          <TouchableOpacity
            style={styles.iconView}
            onPress={() => setOpenArrivalDateTImeTime(true)}>
            <SvgComponent svgMarkup={rightSvgIcon} />
          </TouchableOpacity>
        )}
      </View>
      <ValidationErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default AppDateTimePickerField;

const styles = StyleSheet.create({
  inputView: {
    borderRadius: 15,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',

    ...Platform.select({
      ios: {
        padding: hp(0.1),
      },
      android: {
        padding: hp(0.3),
      },
    }),
    marginVertical: 10,
    backgroundColor: colors.WHITE,
  },
  lableText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: fonts.H10,
    left: wp(2),
  },
  datePickerText: {
    color: colors.BLACK,
    left: wp(4),
  },
  placeholderText: {
    color: colors.placeHolderColor,
  },
  dateView: {
    width: '90%',
    borderRadius: 15,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        height: hp(5.5),
      },
      android: {
        height: hp(6),
      },
    }),
  },

  floatingLabelContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 1,
    left: 20,
    top: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
  },
  floatingLabel: {
    textAlign: 'center',
    marginLeft: '2%',
    marginRight: '2%',
    color: colors.APP_PRIMARY_COLOR,
    fontWeight: '500',
  },
});
