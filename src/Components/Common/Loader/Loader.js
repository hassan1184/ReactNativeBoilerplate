import React, {useState, useEffect} from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';
import colors from '../../../Assets/Colors/Colors';

import styles from './styles';

const Loader = props => {
  const [isloading, setIsLoading] = useState(props.isloading);
  useEffect(() => {
    setIsLoading(props.isloading);
  }, [props.isloading]);
  return (
    <Modal
      visible={props.isloading}
      animationType={'fade'}
      transparent={true}
      onRequestClose={() => {
        setIsLoading(false);
      }}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <ActivityIndicator color={colors.APP_PRIMARY_COLOR} size={'large'} />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
