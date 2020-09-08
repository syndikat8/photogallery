import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Client = ({username, urls, description, navigation, regular}) => {
  onPress = () => {
    navigation.navigate('Photo', {regular});
  };

  return (
    <View style={styles.client}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.image}
          source={{
            uri: urls,
          }}
        />
      </TouchableOpacity>
      <View style={styles.wrap}>
        <Text style={styles.title}>Author: </Text>
        <Text>{username}</Text>
        <Text style={styles.title}>Photo description:</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

export default Client;
