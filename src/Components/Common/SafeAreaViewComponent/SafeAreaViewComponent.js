import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import colors from '../../../Assets/Colors/Colors';
function SafeAreaViewComponent({children, style}) {
  return (
    <React.Fragment>
      <SafeAreaView style={{backgroundColor: colors.APP_PRIMARY_COLOR}} />
      <SafeAreaView style={[styles.screen, style]}>
        <View style={[styles.View, style]}>{children}</View>
      </SafeAreaView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },
  View: {
    flex: 1,
    width: '100%',
  },
});

export default SafeAreaViewComponent;
