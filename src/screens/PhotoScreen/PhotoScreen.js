import React from 'react';
import {View, Image} from 'react-native';
import styles from './style';

const PhotoScreen = ({navigation}) => {
  const regular = navigation.getParam('regular');
  return (
    <View>
      <Image
        style={styles.img}
        source={{
          uri: regular,
        }}
      />
    </View>
  );
};

export default PhotoScreen;
