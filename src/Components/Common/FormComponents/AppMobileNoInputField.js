import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import {useFormikContext} from 'formik';
import colors from '../../../Assets/Colors/Colors';
import {hp} from '../../../Utills/CommonMethods/CommonMethods';
import fonts from '../../../Assets/Fonts/fonts';
import ValidationErrorMessage from './ValidationErrorMessage';
import PhoneInput from 'react-native-phone-number-input';
// import ValidationErrorMessage from "../Components/ValidationErrorMessage";

//import ValidationErrorMessage from "./ValidationErrorMessage";

function AppMobileNoInputField({
  name,
  editable,
  width,
  label,
  labelFontFamily = 'Poppins_Medium',
  onRightIconPress,
  borderWidth,
  borderColor,
  borderRadius,
  maskInput,
  valid,
  setIsValid,
  placeholder,
  //   formattedValue,
  //   setFormattedValue,
  formatedMobileNO,
  setFormatedMobileNO,
  // numberOfLines,
  ...otherProps
}) {
  const {
    handleChange,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
    values,
  } = useFormikContext();
  const phoneInput = useRef(null);
  const [formattedValue, setFormattedValue] = useState('');
  const [value, setValue] = useState('');
  //console.log('asdsda', phoneInput.current?.isValidNumber(value));
  // console.log('lalsdlasd', a, formattedValue);
  useEffect(() => {
    setFormatedMobileNO(
      phoneInput.current?.getNumberAfterPossiblyEliminatingZero(
        value,
        formattedValue,
      ).formattedNumber,
    );
  }, [value]);
  return (
    <View>
      {label && (
        <Text
          style={{
            fontSize: fonts.H9,
            textAlign: 'left',
            marginLeft: '2%',
            fontWeight: 'bold',
            color: colors.primary,
          }}>
          {label}
        </Text>
      )}
      <PhoneInput
        ref={phoneInput}
        // defaultValue={values[name]}
        placeholder={placeholder}
        value={values[name]}
        defaultCode="PK"
        layout="first"
        onChangeText={text => {
          setFieldValue(name, text);
          setValue(text);
          setIsValid(phoneInput.current?.isValidNumber(text));
        }}
        //  onChangeText={text => setValue(text)}
        onChangeFormattedText={text => {
          setFormattedValue(text);
        }}
        {...otherProps}
      />

      <ValidationErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default AppMobileNoInputField;
