import React from 'react';
import {View, Text} from 'react-native';
import {useFormikContext} from 'formik';
import AppTextInput from './AppTextInput';
import colors from '../../../Assets/Colors/Colors';
import ValidationErrorMessage from './ValidationErrorMessage';

function AppFromField({
  name,
  editable,
  floatingLabel,
  width = '100%',
  height,
  label,
  labelFontFamily = 'Poppins_Medium',
  onRightIconPress,
  borderWidth = 1,
  borderColor = colors.APP_PRIMARY_COLOR,
  borderRadius = 15,
  padding,
  numberOfLines,
  ...otherProps
}) {
  const {setFieldValue, setFieldTouched, touched, errors} = useFormikContext();

  return (
    <View>
      {label && (
        <Text
          style={{
            textAlign: 'left',
            marginLeft: '2%',
            fontWeight: 'bold',
          }}>
          {label}
        </Text>
      )}

      <AppTextInput
        floatingLabel={floatingLabel}
        onRightIconPress={onRightIconPress}
        onBlur={() => setFieldTouched(name)}
        backgroundColor={'white'}
        onChangeText={text => setFieldValue(name, text)}
        width={width}
        height={height}
        editable={editable}
        borderWidth={borderWidth}
        borderColor={borderColor}
        borderRadius={borderRadius}
        padding={padding}
        numberOfLines={numberOfLines}
        {...otherProps}
      />

      <ValidationErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default AppFromField;
