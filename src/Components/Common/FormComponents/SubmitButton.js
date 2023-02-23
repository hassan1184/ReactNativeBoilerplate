import React from 'react';
import {useFormikContext} from 'formik';
import AppButton from './AppButton';
import colors from '../../../Assets/Colors/Colors';

function SubmitButton({
  backgroundColor = colors.BLACK,
  titleColor,
  title,
  marginTop,
  loading,
  width,
  ...props
}) {
  const {handleSubmit} = useFormikContext();
  return (
    <AppButton
      backgroundColor={backgroundColor}
      titleColor={titleColor}
      loading={loading}
      marginTop={marginTop}
      title={title}
      onPress={handleSubmit}
      width={width}
      {...props}
    />
  );
}

export default SubmitButton;
