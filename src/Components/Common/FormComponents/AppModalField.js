import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {useFormikContext} from 'formik';
import ValidationErrorMessage from './ValidationErrorMessage';
import colors from '../../../Assets/Colors/Colors';
import {hp} from '../../../Utills/CommonMethods/CommonMethods';
import fonts from '../../../Assets/Fonts/fonts';

const AppModalField = ({
  name,
  label,
  placeholder,
  floatingLabel,
  open,
  setOpen,
  value,
  setValue,
  items,
  setItems,
  placeholderStyle,
  schema,
  onChangeValue,
  borderColor = colors.APP_PRIMARY_COLOR,
  ...props
}) => {
  const {
    handleChange,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
    values,
  } = useFormikContext();
  useEffect(() => {
    if (value) setFieldValue(name, value);
    else setFieldValue(name, '');
  }, [value]);
  return (
    <View>
      {floatingLabel && (
        <View style={styles.floatingLabelContainer}>
          <Text style={styles.floatingLabel}>{floatingLabel}</Text>
        </View>
      )}
      <Text style={[styles.dropdownLabl, {paddingTop: 0}]}>{label}</Text>
      <TouchableOpacity onBlur={() => setFieldTouched(name)}>
        <DropDownPicker
          style={[styles.dropdown, {borderColor: borderColor}]}
          placeholder={placeholder}
          schema={schema}
          placeholderStyle={{
            color: colors.placeHolderColor,
          }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={onChangeValue}
          listMode="MODAL"
          {...props}
        />
      </TouchableOpacity>
      <View style={{marginVertical: hp(1)}}>
        <ValidationErrorMessage error={errors[name]} visible={touched[name]} />
      </View>
    </View>
  );
};

export default AppModalField;

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: colors.WHITE,
    width: '100%',
    borderWidth: 1,

    // borderColor: colors.RED_COLOR,
    borderRadius: 15,
    ...Platform.select({
      ios: {
        padding: hp(1.7),
      },
      android: {
        height: hp(6.5),
        // padding: hp(2),
      },
    }),
    marginBottom: '2%',
  },
  dropdownLabl: {
    fontSize: fonts.H9,
    textAlign: 'left',
    marginLeft: '2%',
    fontWeight: 'bold',
    color: colors.primary,
    paddingVertical: hp(1),
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
  },
  floatingLabel: {
    textAlign: 'center',
    marginLeft: '2%',
    marginRight: '2%',
    color: colors.APP_PRIMARY_COLOR,
    fontWeight: '500',
  },
});
